import React from "react";
import { Appearance, useColorScheme} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Stack from "../src/navigation/StackNavigation";
import AppLoading from "expo-app-loading";
import { ThemeProvider} from "styled-components";
import { dark } from "./theme/dark";
import { light } from "./theme/light";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Sen_400Regular,
  Sen_700Bold,
  Sen_800ExtraBold,
} from "@expo-google-fonts/sen";

export default function App() {
  const colorScheme = useColorScheme()

  const [fontsLoaded] = useFonts({
    Sen_400Regular,
    Sen_700Bold,
    Sen_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <ThemeProvider theme={colorScheme === 'dark'? dark: light}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack />
            </NavigationContainer>
          </SafeAreaProvider>
        </ThemeProvider>
    );
  }
}
