// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { defineComponent } from '../helpers';
import { observer } from 'mobx-react-lite';
import { ButtonStore } from '../store/button';

const RNButton = observer((props) => {
  const clickHandle = () => {
    if (ButtonStore.onClick) {
      // store.onClick();
    }
  };
  return (
    <TouchableOpacity {...props} onPress={clickHandle}>
      <Text style={{ color: '#fff' }}>{props.children}</Text>
    </TouchableOpacity>
  );
});

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
