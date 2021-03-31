import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Typography, Spacing } from '@styles';

const ContactRow = ({ data, navigation }) => {
  const goToContact = () => {
    navigation.navigate('Contact', { contact: data });
  };
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Go to the contact"
      accessibilityHint="Navigates to the the contact you pressed"
      style={styles.container}
      onPress={goToContact}
      testID="contact-row">
      <Text
        style={[styles.text, Typography.FONT_BOLD, { marginRight: 5 }]}
        testID="first">
        {data?.name?.first}
      </Text>
      <Text style={styles.text} testID="last">
        {data?.name?.last}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Spacing.SCALE_16,
    paddingVertical: Spacing.SCALE_16,
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
  },
});

export default ContactRow;
