import React from 'react';
import styled from 'styled-components/native';
import {IHome} from './Home.interface';

const Home: React.FC<IHome.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>Home</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Home;
