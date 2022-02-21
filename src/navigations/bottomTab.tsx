/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { TM_SCREEN, SH_SCREEN, SE_SCREEN } from '@/constants/constants.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1 from '@/screens/Tab1';
import Tab2 from '@/screens/Tab2';
import Tab3 from '@/screens/Tab3';

const Tabs = createBottomTabNavigator();

export default ({route}: any) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={TM_SCREEN} component={Tab1} />
      <Tabs.Screen name={SH_SCREEN} component={Tab2} />
      <Tabs.Screen name={SE_SCREEN} component={Tab3} />
    </Tabs.Navigator>
  );
};
