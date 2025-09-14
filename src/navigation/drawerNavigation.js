import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="HomeTabs" 
        component={TabNavigator} 
        options={{ title: 'Home' }}
      />
      {/* <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      /> */}
    </Drawer.Navigator>
  );
}
