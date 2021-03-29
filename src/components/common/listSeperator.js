import React from 'react';
import { View } from 'react-native';
import { Mixins } from '@styles';

const ListSeperator = () => (
  <View
    style={[
      {
        borderBottomColor: '#212121',
        borderBottomWidth: 1,
      },
      Mixins.margin(0, 16, 0, 16),
    ]}
  />
);

export default ListSeperator;
