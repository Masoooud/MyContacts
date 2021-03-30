import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import ContactRow from '../src/components/contactRow';

describe('ContactRow test', () => {
  test('components rendered properly', () => {
    const contact = { name: { first: 'a', last: 'b' } };
    const navigation = jest.fn();

    const { getByTestId, getAllByTestId, queryByText, toJSON } = render(
      <ContactRow data={contact} navigation={navigation} />,
    );

    expect(getByTestId('button')).toBeTruthy();
    expect(getByTestId('first')).toBeTruthy();
    expect(getByTestId('last')).toBeTruthy();

    expect(getAllByTestId('button')).toHaveLength(1);
    expect(getAllByTestId('first')).toHaveLength(1);
    expect(getAllByTestId('last')).toHaveLength(1);

    expect(queryByText('a')).not.toBeNull();
    expect(queryByText('b')).not.toBeNull();

    expect(toJSON()).toMatchSnapshot();
  });
});
