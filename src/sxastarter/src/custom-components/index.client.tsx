'use client';
/**
 * Required boilerplate for BYOC clientside bundle.
 *
 * DO NOT REMOVE
 */
import * as FEAAS from '@sitecore-feaas/clientside/react';

const externalComponent = (props: any) => {
  debugger;
  return FEAAS.ExternalComponent(props);
};
export default externalComponent;

/**
 * Add imports to BYOC components that you would like to be rendered on server below.
 * Clientside components are used for user interactivity.
 */

// Clientside-only component
import './Hello';
