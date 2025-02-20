// components/MyButton.js
import React, { memo } from 'react';
// @ts-ignore
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { defineComponent } from '../helpers';
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
const RNButton = memo((props: any) => {
  const clickHandle = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <TouchableOpacity style={[style.btnStyle, props.style]} onPress={clickHandle}>
      <Text style={{ color: '#fff' }}>{props.children}</Text>
    </TouchableOpacity>
  );
});

export const Button = defineComponent(RNButton, {
  name: 'Button',
  platform: 'android',
  designerConfig: {
    display: 'inline-block',
    hasWrapper: true,
  },
});
