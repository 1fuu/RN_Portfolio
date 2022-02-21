import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import {IButton} from './Button.interface';

const Button: React.FC<IButton.IProps> = (props) => {
  return (
    <ButtonStyle onPress = {props.onPress}>
      <ButtonTextStyle>{props.title}</ButtonTextStyle>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.TouchableOpacity`
  background-color: 'green';
  justify-content: center;
  align-items: center;
`;

const ButtonTextStyle = styled.Text``;

export default Button;
