import React from 'react';
import { render } from '@testing-library/react-native';
import ContactListScreen from '../src/scenes/contactsList';

describe('testing ContactList Screen', () => {
  const { toJSON } = render(<ContactListScreen />);

  expect(toJSON()).toMatchSnapShot();
});
