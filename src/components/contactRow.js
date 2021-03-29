import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Typography, Spacing } from '@styles';

const ContactRow = (item, navigation) => {
  const goToContact = () => {
    navigation.navigate('Contact', { contact: item });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goToContact}>
      <Text style={[styles.text, Typography.FONT_BOLD, { marginRight: 5 }]}>
        {item?.name?.first}
      </Text>
      <Text style={styles.text}>{item?.name?.last}</Text>
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
