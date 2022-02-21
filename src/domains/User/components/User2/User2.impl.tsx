import React from 'react';
import styled from 'styled-components/native';
import {IUser2} from './User2.interface';

const User2: React.FC<IUser2.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>User2</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View``;

const TextStyle = styled.Text``;

export default User2;
