import {Dimensions} from 'react-native';
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {primary: string; black: string; red: string};
    dimensions: {screenWidth: number; screenHeight: number};
    fonts: {};
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const theme: DefaultTheme = {
  colors: {
    primary: 'white',
    black: '#000',
    red: 'red',
  },
  dimensions: {
    screenWidth,
    screenHeight,
  },
  fonts: {},
};

export {theme};
