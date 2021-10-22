import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

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

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Inter_400Regular" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ fontFamily: "Inter_700Bold" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ fontFamily: "Inter_900Black" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ fontFamily: "Montserrat_400Regular" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ fontFamily: "Montserrat_700Bold" }}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={{ fontFamily: "Montserrat_900Black" }}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
