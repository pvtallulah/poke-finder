import React from 'react';
import 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

import renderer, {act, cleanup} from 'react-test-renderer';
jest.useFakeTimers();

test('renders correctly', async () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.
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

// jest.mock('../api');
// describe('Testing react navigation', () => {
//   test('page contains one textbox to find pokemons', async () => {
//     const component = (
//       <NavigationContainer>
//         <Home />
//       </NavigationContainer>
//     );

//     const {findByPlaceholderText} = render(component);

//     const textbox = await findByPlaceholderText(
//       'Ingrese por lo menos 3 caracteres',
//     );

//     expect(textbox).toBeTruthy();
//   });
// });
