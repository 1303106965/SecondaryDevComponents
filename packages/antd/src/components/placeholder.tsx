//@ts-nocheck
import React from 'react';
import { Box, BoxProps } from './box';
import { defineComponent } from '../helpers';
import { TangoEventButton } from './tango-event-button';
import { StyleSheet, Text } from 'react-native';
export interface PlaceholderProps extends BoxProps {
  /**
   * 尺寸
   * small - 适合文本，按钮等小型控件
   * medium - 中型控件
   * large - 大型控件
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 占位文本
   */
  placeholder?: string;
  /**
   * 按钮文本
   */
  buttonText?: string;
  /**
   * 要实例化的组件名称
   */
  targetComponentName?: string;
}

const placeholderStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
    color: '#333',
    border: '1px solid #666',
    paddingLeft: 12,
    paddingRight: 12,
    userSelect: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

const sizeMap = {
  small: '32',
  medium: '64',
  large: '80',
};

function PlaceholderView({
  size = 'medium',
  placeholder = '点击或拖拽组件/区块到这里',
  ...rest
}: PlaceholderProps) {
  const height = sizeMap[size];
  return (
    <Box height={height} style={placeholderStyle.container} {...rest}>
      <TangoEventButton type="text" payload={{ type: 'addComponent' }}>
        <Text style={{ color: '#333', textAlign: 'center' }}>{placeholder}</Text>
      </TangoEventButton>
    </Box>
  );
}

export const Placeholder = defineComponent(PlaceholderView);
