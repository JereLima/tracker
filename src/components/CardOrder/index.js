import React from "react";
import { View } from "react-native";
import { Container, Title, Order } from "./styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export default function CardOrder({ data}, theme) {
    const the = useTheme();
    console.log(the)
    const { numberOrder, statusOrder } = data;

  return (
    <Container>
      <FontAwesome5
        name={
          statusOrder.statusTracking === "Entregue"
            ? "check-circle"
            : statusOrder.statusTracking === "Ocorrencia"
            ? "exclamation-circle"
            : "truck"
        }
        size={24}
        color={the.colors.primary}
      />
      <Title>{statusOrder.statusTracking}</Title>
      <Order>{numberOrder}</Order>
    </Container>
  );
}
