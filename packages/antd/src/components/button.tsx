// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { Platform } from 'react-native';
import { defineComponent } from '../helpers';
import { Button as AntButton } from 'antd';
import { Button as RNButton } from 'react-native';
// export const MyButton = (props: any) => {
//   // if (Platform.OS === 'web') {
//   //   return <AntButton {...props} />;
//   // }
//   console.log(Platform.OS, 'Platform.OSPlatform.OSPlatform.OS');

//   return <RNButton {...props} />;
// };
export const Button = defineComponent(RNButton, {
  name: 'Button',
  platform: 'android',
  draggable: true,
});
console.log(AntButton, '===================');
