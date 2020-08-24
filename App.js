import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Text} from 'react-native';

import Authenticated from './routes/Authenticated';

const App = () => {
  const [token, setToken] = useState('my-token');
  return (
    <NavigationContainer>
      {/* // Dejo la posibilidad de hacer login, no se pidio. Por eso lo dejo en blanco */}
      {token.length ? <Authenticated /> : <Text>Unauth</Text>}
    </NavigationContainer>
  );
};

export default App;
