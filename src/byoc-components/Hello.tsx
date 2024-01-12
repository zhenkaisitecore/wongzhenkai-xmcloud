import * as FEAAS from '@sitecore-feaas/clientside/react';

export default function Hello() {
  return <h1>Hello from BYOC components</h1>;
}

FEAAS.registerComponent(Hello, {
  name: 'Hello',
  description: 'A BYOC React component to say hello to you',
});
