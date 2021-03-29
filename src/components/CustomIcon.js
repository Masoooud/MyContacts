/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import LeftArrow from './common/icons/LeftArrow';
import Video from './common/icons/Video';
import Phone from './common/icons/Phone';
import Chat from './common/icons/Chat';
import Mail from './common/icons/Mail';

const CustomIcon = ({ name, size = 25, color, style, ...props }) => {
  switch (name) {
    case 'back':
      return <LeftArrow size={size} fill={color} style={style} {...props} />;
    case 'phone':
      return <Phone size={size} fill={color} style={style} {...props} />;
    case 'chat':
      return <Chat size={size} fill={color} style={style} {...props} />;
    case 'video':
      return <Video size={size} fill={color} style={style} {...props} />;
    case 'mail':
      return <Mail size={size} fill={color} style={style} {...props} />;

    default:
      return <Text>?</Text>;
  }
};

export default CustomIcon;
