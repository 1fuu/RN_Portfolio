import {theme} from './theme';

export const getHeight = (value: number, factor?: number) => {
  const height = theme.dimensions.screenHeight;

  const calc: number = 812 / value;

  const size: number = height / calc;
  const result: number = value + (size - value) * (factor || 1);
  return result;
};
