//@ts-nocheck
import React, { forwardRef } from 'react';
import { View, Platform } from 'react-native'; // 引入 React Native 的 View 组件
import type { HTMLCoralProps } from 'coral-system';

// BoxProps 增加 isRender 和适配 React Native
export interface BoxProps extends HTMLCoralProps<'div'> {
  isRender?: boolean;
}
let coral, Div;
if (Platform.OS === 'web') {
  coral = require('coral-system').coral;
  Div = coral('div', undefined, {
    prefix: '--music',
  });
}

// 适配 React Native 和 Web
export const Box = forwardRef<View, BoxProps>(({ isRender = true, ...props }, ref) => {
  if (!isRender) return null; // 如果 isRender 为 false 则不渲染

  if (Platform.OS === 'web') {
    // 如果是在 Web 环境下，渲染 div
    return <Div ref={ref} {...props} />;
  } else {
    // 如果是在 React Native 环境下，渲染 View
    return <View ref={ref} style={props.style} {...props} />;
  }
});
