import {theme} from './theme';

export const getWidth = (value: number) => {
  const width = theme.dimensions.screenWidth;

  const result: number = 375 / value;

  return width / result;
};
