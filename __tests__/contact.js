import React from 'react';
import { render } from '@testing-library/react-native';
import ContactScreen from '../src/scenes/contact';

describe('Contact screen tests', () => {
  test('test render', () => {
    const contact = {
      name: {
        first: 'a',
        last: 'b',
      },
      picture: {
        medium: 'image',
      },
      phone: '1',
      cell: '2',
      email: '@',
    };
    const { getByTestId, getAllByTestId, getByLabelText } = render(
      <ContactScreen route={{ params: { contact: contact } }} />,
    );
    const image = getByTestId('contact-image');
    const fullname = getByTestId('contact-fullname');
    const goBack = getByLabelText('Go back');

    expect(image).toBeTruthy();
    expect(fullname).toBeTruthy();
    expect(goBack).toBeTruthy();

    expect(getByTestId('action-container').props.children).toHaveLength(4);
    expect(getAllByTestId('action-button')).toHaveLength(4);

    expect(getByTestId('field-container').props.children).toHaveLength(3);
    expect(getAllByTestId('field-button')).toHaveLength(3);
  });
});
