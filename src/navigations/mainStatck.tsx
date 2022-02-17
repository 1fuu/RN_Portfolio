import React from 'react';
import {HOME_SCREEN} from '@/constants/constants.screen';
import Home from '@/screens/Home';

export default (Stack: any) => (
  <>
    <Stack.Screen name={HOME_SCREEN} component={Home} />
  </>
);
