// components/MyButton.js
import React from 'react';
// @ts-ignore
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { defineComponent } from '../helpers';
const RNButton = (props: any) => {
  const clickHandle = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <TouchableOpacity {...props} onPress={clickHandle}>
      <Text style={{ color: '#fff' }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: 160,
    backgroundColor: '#f194ff',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export const Button = defineComponent(RNButton, {
  name: 'Button',
  platform: 'android',
  designerConfig: {
    display: 'inline-block',
    hasWrapper: true,
    defaultProps: {
      style: style.btnStyle,
    },
  },
});
