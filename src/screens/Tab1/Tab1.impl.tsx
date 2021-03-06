import React from 'react';
import styled from 'styled-components/native';
import {ITab1} from './Tab1.interface';
import User1 from '@/domains/User/components/User1';

const Tab1: React.FC<ITab1.IProps> = () => {
  return (
    <ContainerStyle>
      <User1 />
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
