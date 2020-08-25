import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Home';
const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen
        initialRouteName="Home"
        name="Inicio"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};
