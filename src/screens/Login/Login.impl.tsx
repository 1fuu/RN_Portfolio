import {HOME_SCREEN} from '@/constants/constants.screen';
import React from 'react';
import styled from 'styled-components/native';
import {ILogin} from './Login.interface';

const Login: React.FC<ILogin.IProps> = ({navigation}) => {
  const goHome = () => {
    navigation.navigate(HOME_SCREEN);
  };
  return (
    <ContainerStyle>
      <LoginCotainer onPress={goHome}>
        <TextStyle>Login</TextStyle>
      </LoginCotainer>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const LoginCotainer = styled.TouchableOpacity``;

const TextStyle = styled.Text``;

export default Login;
