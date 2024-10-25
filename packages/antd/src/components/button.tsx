// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { defineComponent } from '../helpers';
import { Button as AntButton } from 'antd';
import { TouchableOpacity as RNButton } from 'react-native';
// export const MyButton = (props: any) => {
//   // if (Platform.OS === 'web') {
//   //   return <AntButton {...props} />;
//   // }
//   console.log(Platform.OS, 'Platform.OSPlatform.OSPlatform.OS');

//   return <RNButton {...props} />;
// };
const style = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: 160,
    backgroundColor: '#ff0000',
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
