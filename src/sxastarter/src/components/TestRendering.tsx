import React from 'react';

import { Field, Text, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  SomeText: Field<string>;
  Image: ImageField;
}

type MyRenderingProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: MyRenderingProps): JSX.Element => {
  return (
    <div className={`component myrendering ${props.params.styles}`}>
      <div className="component-content">
        <div>
          <Text field={props.fields.SomeText} />
          <Image field={props.fields.Image} />
        </div>
      </div>
    </div>
  );
};
