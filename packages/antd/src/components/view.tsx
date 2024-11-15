//@ts-nocheck
import React from 'react';
import { View as androidView, StyleSheet } from 'react-native';
import { defineComponent } from '../helpers';
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    heigh: 300,
  },
});
export const View = defineComponent(androidView, {
  designerConfig: {
    render({ children, designerProps, originalProps }) {
      return React.cloneElement(children, {
        ...originalProps,
        ...designerProps,
      });
    },
    defaultProps: {
      style: styles.view,
    },
  },
});
