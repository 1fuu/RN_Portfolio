import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import authStack from './authStack';
// import commonStack from './commonStack';
import mainStatck from './mainStatck';

const Stack = createNativeStackNavigator();

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authStack(Stack)}
        {mainStatck(Stack)}
        {/* {commonStack(Stack)} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
