import React from 'react';
import {BOTTOM_TAB, HOME_SCREEN} from '@/constants/constants.screen';
import Home from '@/screens/Home';
import bottomTab from './bottomTab';

export default (Stack: any) => (
  <>
    <Stack.Screen name={BOTTOM_TAB} component={bottomTab} />
    <Stack.Screen name={HOME_SCREEN} component={Home} />
  </>
);
