import React from 'react';
import { defineComponent } from '@music163/tango-boot';
import { Box as BaseBox } from '../../../foundation/src/index';
import { Placeholder } from './placeholder';

export const Box = defineComponent(BaseBox, {
  name: 'Box',
  designerConfig: {
    defaultProps: {
      children: <Placeholder />,
    },
  },
});
