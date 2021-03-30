import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Typography, Spacing } from '@styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyHeader = ({ title, leftButton, rightButton }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: 'red',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container} testID="header-container">
        {leftButton ? leftButton : <View />}
        <Text style={[styles.title, Typography.FONT_BOLD]}>{title}</Text>
        {rightButton ? <rightButton /> : <View />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.SCALE_16,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    width: '34%',
    textAlign: 'center',
  },
});

export default MyHeader;
