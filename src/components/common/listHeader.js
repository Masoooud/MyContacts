import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scaleFont } from '@styles/mixins';

const ListHeader = ({ title }) => (
  <View style={styles}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: scaleFont(32),
  },
});

export default ListHeader;
