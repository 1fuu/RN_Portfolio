import React from 'react';
import {LOGIN_SCREEN} from '@/constants/constants.screen';
import Login from '@/screens/Login';

export default (Stack: any) => (
  <>
    <Stack.Screen name={LOGIN_SCREEN} component={Login} />
  </>
);
