import React, {useContext} from 'react';
import styled from 'styled-components/native';
//Icon
import HomeIcon from '../../images/icons/home.svg';
import SearchIcon from '../../images/icons/search.svg';
import PersonIcon from '../../images/icons/person.svg';


export const TabArea = styled.View`
  height: 60px;
  background-color: ${({theme}) => theme.colors.tabBar};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TabItem = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  background-color: #f0f0f0;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  bottom: 30px;
  border: 3px solid #4eadbe;
`;

const TabBar = ({state, navigation}) => {

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          width="30"
          fill={state.index === 0 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          width="30"
          fill={state.index === 1 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <PersonIcon
          width="30"
          fill={state.index === 2 ? '#f0f0f0' : '#fff9'}
        />
      </TabItem>
    </TabArea>
  );
};
export default TabBar;