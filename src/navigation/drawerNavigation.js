import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';
import CustomDrawer from './customDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
      drawerStyle: {
        width: 280,
      },
    }}
    >
      <Drawer.Screen 
        name="HomeTabs" 
        component={TabNavigator} 
        options={{ title: 'My DashBoard' }}
      />
      {/* <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen} 
      /> */}
    </Drawer.Navigator>
  );
}
