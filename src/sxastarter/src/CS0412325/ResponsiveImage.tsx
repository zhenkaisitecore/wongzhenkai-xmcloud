import React from 'react';
import {
  Image as JssImage,
  ImageField,
  ImageProps,
  NextImage as JssNextImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { containerSizes, imageSizes, viewPortSizes } from './ImageHelper';

export type ResponsiveImageProp = {
  field: ImageField | undefined;
  [attributeName: string]: unknown;
  relateToContainer?: boolean;
  viewPortSizes?: string;
  objectFit?: string;
  editable?: boolean;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  transformationKey?: string;
  fixedWidth?: number;
} & ImageProps;

interface imageLoadProps {
  src: string;
  width: string | number;
  height?: string | number;
  quality?: string | number;
  transformationKey: string;
  imageSizes: number[];
}

type SourceProps = {
  field: ImageField | undefined;
  media: string;
  imageSizes: number[];
  transformationKey: string;
};

const Source = ({ field, media, imageSizes, transformationKey }: SourceProps) => {
  const srcSet = imageSizes
    .map((imageSize) => {
      const imageSrc = imageLoader({
        src: field?.value?.src || '',
        width: imageSize,
        transformationKey,
        imageSizes,
      });

      return `${imageSrc} ${imageSize}w`;
    })
    .join(', ');

  return <source media={media} srcSet={srcSet} key={media} />;
};

const imageLoader = ({ src, width, transformationKey, imageSizes }: imageLoadProps) => {
  const _width = typeof width === 'string' ? parseInt(width) : width;
  const matchingImage = imageSizes.find((imageSize) => imageSize >= _width);
  return `${src}&t=${transformationKey}${matchingImage || imageSizes[imageSizes.length - 1]}`;
};

export const ResponsiveImage = (props: ResponsiveImageProp): JSX.Element | null => {
  const { sitecoreContext } = useSitecoreContext();

  const transformationKey = props.transformationKey || `rw`;
  const editModeImageSize = `${transformationKey}480`;
  const imageClassName = props.className ? props.className : '';
  const imageFill = props.fill != undefined ? props.fill : true;
  let style = {};
  let sizes = viewPortSizes;

  if (props.objectFit && props.objectFit === 'cover') {
    style = {
      style: {
        objectFit: 'cover',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
      },
    };
  }

  if (props.relateToContainer) {
    sizes = containerSizes;
  }

  if (props.viewPortSizes) {
    sizes = props.viewPortSizes;
  }

  if (sitecoreContext.pageEditing) {
    const updateProps =
      props.field?.editable && props.field?.value && props.field?.value['stylelabs-content-id']
        ? {
            ...props,
            field: {
              editable: props.field?.editable.replace(
                /<image (.*?) src="(.*?)"(.*?)\/>/g,
                '<image $1 src="$2&t=' + editModeImageSize + '"$3/>'
              ),
            },
          }
        : props;

    return <JssImage {...updateProps} className={imageClassName} />;
  }

  if (props?.field?.value?.src) {
    // Contenthub Image
    if (props.field?.value && props.field.value['stylelabs-content-id']) {
      // 1. "Art direction" use case with separate croppings per viewport
      if (Array.isArray(props.sources)) {
        const fallbackSrc = imageLoader({
          src: props.field.value.src,
          width: 1200,
          transformationKey,
          imageSizes,
        });

        return (
          <picture>
            {props.sources.map((sourceProps) => (
              <Source key={sourceProps.media} {...sourceProps} field={props.field} />
            ))}

            <img src={fallbackSrc} {...style} alt={`${props.field.value.alt || ''}`} />
          </picture>
        );
      }

      // 2. Default use case, same cropping on every viewport
      const blurData =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8Uw8AAl0Bbfn0s/kAAAAASUVORK5CYII=';

      // Variant: Single image size on every viewport
      if (props.fixedWidth) {
        props.field.value.src = imageLoader({
          src: props.field.value.src,
          width: props.fixedWidth,
          transformationKey,
          imageSizes,
        });
      }

      return (
        <JssNextImage
          field={props.field}
          loader={({ src, width }) => imageLoader({ src, width, transformationKey, imageSizes })}
          sizes={sizes}
          {...style}
          placeholder={'blur'}
          blurDataURL={blurData}
          fill={imageFill}
          className={imageClassName}
          priority={props.priority}
          unoptimized={!!props.fixedWidth}
        />
      );
    }

    const srcSet = imageSizes.map((size: number) => ({ mw: size }));

    return (
      <JssImage
        field={props.field}
        srcSet={srcSet}
        sizes={sizes}
        {...style}
        className={imageClassName}
      />
    );
  } else {
    return null;
  }
};
