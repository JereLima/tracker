import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme/dark";
import { light } from "./theme/light";

import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import Login from "./screens/Login";

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={light}>
        <Login />
      </ThemeProvider>
    );
  }
}