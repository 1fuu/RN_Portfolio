import React from 'react';
import styled from 'styled-components/native';
import {ITab3} from './Tab3.interface';
import {User3} from '@/domains/User/components';

const Tab3: React.FC<ITab3.IProps> = () => {
  return (
    <ContainerStyle>
      <User3 />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Tab3;
