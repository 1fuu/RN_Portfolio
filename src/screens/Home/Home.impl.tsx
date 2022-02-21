import {BOTTOM_TAB} from '@/constants/constants.screen';
import React from 'react';
import styled from 'styled-components/native';
import {IHome} from './Home.interface';
import Button from '@/common/components/Button';

const Home: React.FC<IHome.IProps> = props => {
  const {navigation} = props;

  const goBottomTab = () => {
    navigation.navigate(BOTTOM_TAB);
  };
  return (
    <ContainerStyle>
      <HomeContainer>
        <Button title = "탭버튼" onPress = {goBottomTab} />
      </HomeContainer>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.View`
  flex: 1;
`;

const HomeContainer = styled.TouchableOpacity``;

const TextStyle = styled.Text`
  color: ${({theme}) => theme.colors.red};
`;

export default Home;
