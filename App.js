import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Text} from 'react-native';

import Unauthenticated from './routes/Unauthenticated';
import Authenticated from './routes/Authenticated';

const App = () => {
  const [token, setToken] = useState('my-token');
  return (
    <NavigationContainer>
      {/* {token.length ? <Authenticated /> : <Unauthenticated />} */}
      {token.length ? <Authenticated /> : <Text>Unauth</Text>}
    </NavigationContainer>
  );
};

export default App;
