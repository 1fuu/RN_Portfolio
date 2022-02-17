import React from 'react';
import styled from 'styled-components/native';
import {ILogin} from './Login.interface';

const Login: React.FC<ILogin.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>Login</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const TextStyle = styled.Text``;

export default Login;
