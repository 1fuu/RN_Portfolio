import React from 'react';
import styled from 'styled-components/native';
import {ITab1} from './Tab1.interface';

const Tab1: React.FC<ITab1.IProps> = () => {
  return (
    <ContainerStyle>
      <TextStyle>tab1</TextStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Tab1;
