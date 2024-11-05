import { ComponentPrototypeType } from '@music163/tango-helpers';
import { StylePrototypes } from './common';

export const Box: ComponentPrototypeType = {
  name: 'Box',
  title: '盒子',
  icon: 'icon-mianban',
  type: 'container',
  package: 'snwit-android-components',
  hasChildren: true,
  siblingNames: ['Box'],
  props: [
    ...StylePrototypes,
  ],
};
