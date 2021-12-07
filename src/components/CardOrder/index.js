import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, Title, Order, Column } from "./styles";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import Success from '../../images/icons/success.svg'
import Ocurrence from '../../images/icons/ocurrence.svg'
import Truck from '../../images/icons/truck.svg'
import { shadow } from "../../theme/shadows";
import { useNavigation } from "@react-navigation/native";

export default function CardOrder({ data}) {
    const theme = useTheme();
    const { numberOrder, statusOrder } = data;
    const navigation = useNavigation();

  return (
    <Container style={shadow.primary} onPress={() => navigation.navigate('OrderDetails', {item:data})}>
      {statusOrder.statusTracking === "Viajando" ? 
        <Truck width={35} fill={theme.colors.secondary} /> :
        statusOrder.statusTracking === "Entregue" ? 
        <Success width={35} fill={theme.colors.secondary} /> :
        <Ocurrence width={35} fill={theme.colors.secondary} />
    }
      <Column>
        <Title>{statusOrder.statusTracking}</Title>
        <Order>Pedido: Nº{numberOrder}</Order>
      </Column>
    </Container>
  );
}
