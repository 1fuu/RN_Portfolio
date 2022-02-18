import React from 'react';
import styled from 'styled-components/native';
import {IButton} from './Button.interface';

const Button: React.FC<IButton.IProps> = () => {
  return (
    <ButtonStyle>
      <ButtonTextStyle>button</ButtonTextStyle>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.TouchableOpacity``;

const ButtonTextStyle = styled.Text``;

export default Button;
