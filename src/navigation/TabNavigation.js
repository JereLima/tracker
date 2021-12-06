import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Profile } from "../screens";
import TabBar from "../components/TabBar";
import Header from "../components/Header";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Backbutton from "../../src/images/icons/back.svg";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const theme = useTheme();
  const navigation = useNavigation();
  const headarOn = {
    title: "Perfil",
    headerShown: true,
    headerTintColor: theme.colors.backgroundColor,
    headerLeft: () => (
      <Backbutton
        height={30}
        fill={theme.colors.icons}
        onPress={() => navigation.goBack()}
      />
    ),
  };

  const headerOff = { headerShown: false };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} options={headerOff} />
      <Tab.Screen name="Search" component={Search} options={headerOff} />
      <Tab.Screen name="Profile" component={Profile} options={headerOff} />
    </Tab.Navigator>
  );
}
