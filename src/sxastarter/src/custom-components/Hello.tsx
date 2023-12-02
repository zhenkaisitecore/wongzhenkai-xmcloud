import * as FEAAS from '@sitecore-feaas/clientside/react';
import React from 'react';

// type HelloProps = {
//   name: string;
// };
const SayHello = () => {
  return (
    <>
      <h1>Hello XM Cloud</h1>
    </>
  );
};

export default SayHello;

FEAAS.registerComponent(SayHello, {
  name: 'Say Hello BYOC component',
});
