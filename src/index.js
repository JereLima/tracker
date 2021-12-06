import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "../src/navigation/StackNavigation";
import AppLoading from "expo-app-loading";
import styled from "styled-components/native";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme/dark";
import { light } from "./theme/light";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Sen_400Regular,
  Sen_700Bold,
  Sen_800ExtraBold,
} from "@expo-google-fonts/sen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Sen_400Regular,
    Sen_700Bold,
    Sen_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
