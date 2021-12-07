import React from "react";
import {
  Container,
  ContainerItem,
  StatusImage,
  Row,
  Column,
  Status,
  OrderNumber,
  ContainerPosition,
  TextLocation,
  ContainerProducts,
  FlatList,
  TitleProducts,
  ColumnProducts,
  Products,
  ContainerPod,
  ContainerOcurrence,
} from "./styles";
import { Header, Spacing } from "../../components";
import { useRoute } from "@react-navigation/native";
import Success from "../../images/icons/success.svg";
import Ocurrence from "../../images/icons/ocurrence.svg";
import Truck from "../../images/icons/truck.svg";
import Location from "../../images/icons/pin.svg";
import Box from "../../images/icons/box.svg";

import { useTheme } from "styled-components";
import { shadow } from "../../theme/shadows";

export default function OrderDetails() {
  const theme = useTheme();
  const colorIcon = theme.colors.secondary;
  const route = useRoute();
  const { item } = route.params;
  const status = item.statusOrder.statusTracking;
  const products = item.products;

  console.log(item.products);

  return (
    <Container>
      <Header title="Pedidos" />
      <ContainerItem>
        {status === "Viajando" ? (
          <Truck width={52} height={52} fill={colorIcon} />
        ) : status === "Entregue" ? (
          <Success width={52} height={52} fill={colorIcon} />
        ) : (
          <Ocurrence width={52} height={52} fill={colorIcon} />
        )}
        <Column>
          <Status>212121</Status>
          <OrderNumber>23235235</OrderNumber>
        </Column>
      </ContainerItem>
      <Spacing height={10} />
      <ContainerPosition style={shadow.primary}>
        <Location width={52} height={41} fill={colorIcon} />
        <TextLocation>Última posição</TextLocation>
      </ContainerPosition>
      <Spacing height={10} />
      <ContainerProducts style={shadow.primary}>
        <TitleProducts>Produtos do pedido</TitleProducts>
        <Row>
          <Box width={52} height={30} fill={colorIcon} />
        </Row>
        <ColumnProducts>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Products>{item.product}</Products>}
          />
        </ColumnProducts>
      </ContainerProducts>
      <ContainerPod />
      <ContainerOcurrence />
    </Container>
  );
}
