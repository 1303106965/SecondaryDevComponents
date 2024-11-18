// @ts-nocheck
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { defineComponent } from '../helpers';
// 获取屏幕的高度
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f0f2f5',
    padding: 20,
  },
  titleBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
  },
});
function RNScrollView(props: any) {
  const { children, title, subTitle, rest, 'data-dnd': dndData } = props;
  return (
    // 兼容状态栏SafeAreaView
    <SafeAreaView>
      {/* 提供设计器功能 */}
      <View {...props} style={[styles.page, { minHeight: height }]}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subTitle}</Text>
        </View>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
}

export const Page = defineComponent(RNScrollView, {
  name: 'Page',
  platform: 'android',
  designerConfig: {
    display: 'block',
    hasWrapper: true,
  },
});
