// components/MyButton.js
import React from 'react';
// @ts-ignore
import { StyleSheet, TextInput } from 'react-native';
import { defineComponent } from '../helpers';
const RNInput = (props: any) => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <TextInput
      {...props}
      value={inputValue}
      onChangeText={setInputValue}
      placeholder="请输入..."
    ></TextInput>
  );
};

const style = StyleSheet.create({
  input: {
    height: 36,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: '#c1c1c1',
    padding: 10,
  },
});
export const Input = defineComponent(RNInput, {
  name: 'Input',
  platform: 'android',
  designerConfig: {
    display: 'inline-block',
    hasWrapper: true,
    defaultProps: {
      style: style.input,
    },
  },
});
