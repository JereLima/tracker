import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Title, Order, Column } from "./styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Success from '../../images/icons/success.svg'
import Ocurrence from '../../images/icons/ocurrence.svg'
import Truck from '../../images/icons/truck.svg'


import { shadow } from "../../theme/shadows";


export default function CardOrder({ data}) {
    const theme = useTheme();
    const { numberOrder, statusOrder } = data;

  return (
    <Container style={shadow.primary}>
      {statusOrder.statusTracking === "Viajando" ? 
        <Truck width={35} fill={theme.colors.icons} /> :
        statusOrder.statusTracking === "Entregue" ? 
        <Success width={35} fill={theme.colors.icons} /> :
        <Ocurrence width={35} fill={theme.colors.icons} />
    }
      <Column>
        <Title>{statusOrder.statusTracking}</Title>
        <Order>Pedido: Nº{numberOrder}</Order>
      </Column>
    </Container>
  );
}
