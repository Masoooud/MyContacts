import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import Layout from '@components/common/layout';
import { Mixins, Spacing, Typography } from '@styles';
import MyBackButton from '@components/common/backButton';
import CustomIcon from '@components/CustomIcon';

const ContactScreen = ({ route, navigation }) => {
  const { contact } = route.params;

  const createField = (name, value, action) => (
    <TouchableOpacity
      style={styles.field}
      onPress={() => doAction(action, value)}>
      <Text
        style={[
          styles.title,
          Typography.FONT_WEIGHT_BOLD,
          Typography.FONT_SIZE_20,
          { marginBottom: Mixins.scaleSize(8) },
        ]}>
        {name}
      </Text>
      <Text>{value}</Text>
    </TouchableOpacity>
  );

  const doAction = (action, value) => {
    switch (action) {
      case 'tel':
        Linking.openURL(`tel:${value}`);
        break;
      case 'mailto':
        Linking.openURL(`mailto:${value}`);
        break;
      case 'sms':
        Linking.openURL(`sms:${value}`);
        break;
      case 'http':
        Linking.openURL(`tel:${value}`);
        break;
      default:
        alert('Not available');
        break;
    }
  };

  const createAction = (name, icon, value, action) => (
    <TouchableOpacity
      style={styles.action}
      onPress={() => doAction(action, value)}
      testID="actionButton">
      <CustomIcon name={icon} fill="#212121" size={20} />
      <Text style={styles.subtext}>{name}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout
      header={{
        title: '',
        leftButton: <MyBackButton navigation={navigation} />,
      }}
      navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${contact.picture.medium}` }}
            style={styles.image}
          />
          <Text style={[styles.title, { marginTop: 16 }]} testedID="fullname">
            {contact.name.first} {contact.name.last}
          </Text>
        </View>
        <View style={styles.actionContainer}>
          {createAction('call', 'phone', contact.phone, 'tel')}
          {createAction('message', 'chat', contact.phone, 'sms')}
          {createAction('video call', 'video', contact.video, '#')}
          {createAction('mail', 'mail', contact.email, 'mailto')}
        </View>
        <View style={styles.content}>
          {createField('Phone', contact.phone, 'tel')}
          {createField('Cell', contact.cell, 'tel')}
          {createField('Email', contact.email, 'mailto')}
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    width: '100%',
    height: '25%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    padding: Spacing.SCALE_16,
  },
  title: {
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  text: {
    fontSize: Typography.FONT_SIZE_16,
  },
  subtext: {
    fontSize: Typography.FONT_SIZE_12,
    marginTop: Spacing.SCALE_8,
  },
  field: {
    backgroundColor: '#00000010',
    padding: Mixins.scaleSize(16),
    marginBottom: Mixins.scaleSize(16),
    borderRadius: 8,
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Mixins.scaleSize(16),
  },
  action: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000010',
    paddingVertical: Mixins.scaleSize(16),
    paddingHorizontal: Mixins.scaleSize(8),
    borderRadius: 8,
    width: '24%',
  },
});

export default ContactScreen;
