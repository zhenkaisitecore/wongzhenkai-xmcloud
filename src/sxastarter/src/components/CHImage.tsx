import React from 'react';

import { Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

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
          <Image field={props.fields.CHImage} />
        </div>
      </div>
    </div>
  );
};
