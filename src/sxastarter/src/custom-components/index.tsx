import * as FEAAS from '@sitecore-feaas/clientside/react';
import ClientsideBundle from './index.client';
import dynamic from 'next/dynamic';

FEAAS.enableNextClientsideComponents(dynamic, ClientsideBundle);
