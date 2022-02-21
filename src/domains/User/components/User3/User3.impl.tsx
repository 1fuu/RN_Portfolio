import React from 'react';
import styled from 'styled-components/native';
import {IUser3} from './User3.interface';

const User3: React.FC<IUser3.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>User3</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View``;

const TextStyle = styled.Text``;

export default User3;
