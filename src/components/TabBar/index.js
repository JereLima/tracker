import React, {useContext} from 'react';
//Icon
import HomeIcon from '../../images/icons/home.svg';
import SearchIcon from '../../images/icons/search.svg';
import PersonIcon from '../../images/icons/person.svg';
import { useTheme } from 'styled-components';
import { TabArea, TabItem} from './styles'

const TabBar = ({state, navigation}) => {
  const theme = useTheme();
  const colorIcon = theme.colors.secondary;
  const off = '#aaa';

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          width="30"
          fill={state.index === 0 ? colorIcon : off}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Search')}>
        <SearchIcon
          width="30"
          fill={state.index === 1 ? colorIcon : off}
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <PersonIcon
          width="30"
          fill={state.index === 2 ? colorIcon : off}
        />
      </TabItem>
    </TabArea>
  );
};
export default TabBar;