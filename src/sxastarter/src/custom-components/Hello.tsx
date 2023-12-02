import * as FEAAS from '@sitecore-feaas/clientside/react';

// type HelloProps = {
//   name: string;
// };

export const SayHello = () => {
  return <h1>Hello XM Cloud</h1>;
};

FEAAS.registerComponent(SayHello, {
  name: 'Say Hello BYOC component',
});
