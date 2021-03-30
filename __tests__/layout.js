import React from 'react';
import Layout from '../src/components/common/layout';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Layout component testing', () => {
  test('Layout component does not have header', () => {
    const { getByTestId, queryByTestId } = render(<Layout />);

    const layout = getByTestId('layout');
    expect(layout).toBeTruthy();

    const header = queryByTestId('header-container');
    expect(header).not.toBeTruthy();
  });

  test('Layout component have header', () => {
    const header = { title: 'masoud' };
    const { queryByTestId } = render(<Layout header={header} />);

    const headerComponent = queryByTestId('header-container');
    expect(headerComponent).toBeTruthy();
  });

  test('Layout render children properly', () => {
    const { getAllByText, getAllByTestId } = render(
      <Layout>
        <Text>hello</Text>
      </Layout>,
    );

    expect(getAllByTestId('layout')).toHaveLength(1);
    expect(getAllByText('hello')).toHaveLength(1);
  });
});
