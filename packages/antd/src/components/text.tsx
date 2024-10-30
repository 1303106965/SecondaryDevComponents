// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { Platform, StyleSheet, Text as RNText } from 'react-native';
import { defineComponent } from '../helpers';

export const Text = defineComponent(RNText, {
  name: 'Text',
  platform: 'android',
  designerConfig: {
    display: 'inline-block',
    hasWrapper: true,
  },
});
