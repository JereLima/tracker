import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, OrderDetails } from "../screens";
import TabNavigation from "./TabNavigation";
import { useNavigation } from "@react-navigation/native";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const headerOff = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={headerOff} />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={headerOff}
      />
      <Stack.Screen name="Tab" component={TabNavigation} options={headerOff} />
    </Stack.Navigator>
  );
}
