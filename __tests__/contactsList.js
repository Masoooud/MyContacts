import React from 'react';
import { act, render } from '@testing-library/react-native';
import ContactListScreen from '../src/scenes/contactsList';

describe('testing ContactList Screen', () => {
  test('render testing', () => {
    jest.useFakeTimers();

    const { toJSON } = render(<ContactListScreen />);

    act(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
