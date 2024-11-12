// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { defineComponent } from '../helpers';
import { Button as AntButton } from 'antd';
import { TouchableOpacity, Text } from 'react-native';
function RNButton({ ...props }: any) {
  const clickHandle = () => {
    props.onClick() || null;
  };
  return (
    <TouchableOpacity {...props} onPress={clickHandle}>
      <Text style={{ color: '#fff' }}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: 160,
    backgroundColor: '#006cbe',
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
