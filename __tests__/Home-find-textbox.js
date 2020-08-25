// __tests__/Login-page-test.js
import React from 'react';
import 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

import {render} from '@testing-library/react-native';

jest.mock('../api');
describe('Testing react navigation', () => {
  test('page contains one textbox to find pokemons', async () => {
    const component = (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    );

    const {findByPlaceholderText} = render(component);

    const textbox = await findByPlaceholderText(
      'Ingrese por lo menos 3 caracteres',
    );

    expect(textbox).toBeTruthy();
  });
});
