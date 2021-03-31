import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Typography } from '@styles';
import LeftArrow from './icons/LeftArrow';

const MyBackButton = ({ text, navigation }) => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Go back"
      accessibilityHint="Navigates to the previous screen"
      onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <LeftArrow size={15} fill="#000" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_14,
    marginLeft: 5,
  },
});

export default MyBackButton;
