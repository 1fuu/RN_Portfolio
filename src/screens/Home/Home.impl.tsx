import {BOTTOM_TAB} from '@/constants/constants.screen';
import React from 'react';
import styled from 'styled-components/native';
import {IHome} from './Home.interface';

const Home: React.FC<IHome.IProps> = props => {
  const {navigation} = props;

  const goBottomTab = () => {
    navigation.navigate(BOTTOM_TAB);
  };
  return (
    <ContainerStyle>
      <ButtonContainerStyle onPress={goBottomTab}>
        <TextStyle>Home</TextStyle>
      </ButtonContainerStyle>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const ButtonContainerStyle = styled.TouchableOpacity``;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Home;
