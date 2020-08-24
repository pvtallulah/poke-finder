import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../screens/Home';

const Drawer = createDrawerNavigator();
const Authenticated = () => {
  return (
    <Drawer.Navigator initialRouteName="Autorización de Ingreso">
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default Authenticated;
