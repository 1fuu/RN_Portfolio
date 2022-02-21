import React from 'react';
import styled from 'styled-components/native';
import {ITab2} from './Tab2.interface';
import {User2} from '@/domains/User/components';

const Tab2: React.FC<ITab2.IProps> = () => {
  return (
    <ContainerStyle>
      <User2 />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Tab2;
