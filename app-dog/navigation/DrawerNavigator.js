import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Settings from '../screens/Settings';
import About from '../screens/About';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="HomeTabs" component={TabNavigator} options={{ title: 'Início' }} />
      <Drawer.Screen name="Settings" component={Settings} options={{ title: 'Configurações' }} />
      <Drawer.Screen name="About" component={About} options={{ title: 'Sobre o App' }} />
    </Drawer.Navigator>
  );
}
