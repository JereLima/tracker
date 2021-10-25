import React, {useState} from "react";
import { StyleSheet, Text, View, Dimensions, useColorScheme } from "react-native";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import light from './theme/light';
import dark from './theme/dark';

import Login from "./screens/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  const device = useColorScheme();
  const [thema, setThema] = useState(false);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    
    return (
      <ThemeProvider theme={thema ? dark : light} >
          <Login />
      </ThemeProvider>
    );
  }
};