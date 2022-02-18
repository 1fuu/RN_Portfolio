import React from 'react';
import styled from 'styled-components/native';
import {IUser1} from './User1.interface';

const User1: React.FC<IUser1.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>User1</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View``;

const TextStyle = styled.Text``;

export default User1;
