import React from 'react';
import cx from 'classnames';
import { View as androidView } from 'react-native';
import { defineComponent } from '@music163/tango-boot';
import { Placeholder } from './placeholder';

export const View = defineComponent(androidView, {
  designerConfig: {
    render({ children, designerProps, originalProps }) {
      return React.cloneElement(children, {
        children: <Placeholder />,
        ...originalProps,
        ...designerProps,
      });
    },
  },
});
