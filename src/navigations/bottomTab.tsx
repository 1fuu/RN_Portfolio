/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {TAB1_SCREEN} from '@/constants/constants.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '@/screens/Tab1';

const Tabs = createBottomTabNavigator();

export default ({route}: any) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={TAB1_SCREEN} component={Tab1} />
    </Tabs.Navigator>
  );
};
