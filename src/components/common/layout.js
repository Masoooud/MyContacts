import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import MyHeader from './header';

const Layout = ({ children, header }) => {
  return (
    <View style={styles.container} testID="layout">
      {header && (
        <MyHeader
          title={header.title}
          rightButton={header.rightButton}
          leftButton={header.leftButton}
        />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Layout;
