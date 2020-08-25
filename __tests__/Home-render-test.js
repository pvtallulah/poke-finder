import React from 'react';
import 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

import renderer, {act, cleanup} from 'react-test-renderer';
jest.useFakeTimers();

test('renders correctly', async () => {
  const tree = renderer
    .create(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    )
    .toJSON();
  await act(() => {});
  expect(tree).toMatchSnapshot();
});
