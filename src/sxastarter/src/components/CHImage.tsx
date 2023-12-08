import React from 'react';

// import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

// import { ResponsiveImage } from '../CS0412325/ResponsiveImage';

interface Fields {
  CHImage: ImageField;
}

type CHImageProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: CHImageProps): JSX.Element => {
  return (
    <div className={`component chimage ${props.params.styles}`}>
      <div className="component-content">
        <div>
          <h1>Test image come after this:</h1>
          <NextImage field={props.fields.CHImage} />
          {/* <Image field={props.fields.CHImage} /> */}
          {/* <ResponsiveImage field={props.fields.CHImage} /> */}
        </div>
      </div>
    </div>
  );
};
