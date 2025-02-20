// components/MyButton.js
//@ts-nocheck
import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { defineComponent } from '../helpers';
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title || 'noTitle'}</Text>
  </View>
);
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const RNList = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export const List = defineComponent(RNList, {
  name: 'List',
  platform: 'android',
  designerConfig: {
    display: 'block',
    hasWrapper: true,
    defaultProps: {
      style: styles.container,
    },
  },
});
