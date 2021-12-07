import React from "react";
import { Linking } from "react-native";
import {
  Container,
  Scroll,
  ContainerItem,
  Column,
  Status,
  OrderNumber,
  ContainerPosition,
  TextLocation,
  ContainerProducts,
  FlatList,
  TitleProducts,
  Products,
  ContainerPod,
  TitlePod,
  ContainerOcurrence,
  TitleOcurrence,
  DescriptionOcurrence,
  Row,
} from "./styles";
import { Header, Spacing } from "../../components";
import { useRoute } from "@react-navigation/native";
import Success from "../../images/icons/success.svg";
import Ocurrence from "../../images/icons/ocurrence.svg";
import Truck from "../../images/icons/truck.svg";
import Location from "../../images/icons/pin.svg";
import Box from "../../images/icons/box.svg";
import Pod from "../../images/icons/pod.svg";

import { useTheme } from "styled-components";
import { shadow } from "../../theme/shadows";

export default function OrderDetails() {
  const theme = useTheme();
  const colorIcon = theme.colors.secondary;
  const route = useRoute();
  const { item } = route.params;
  const status = item.statusOrder.statusTracking;
  const ocurrence = item.statusOrder.occurrence;
  const descripition = item.statusOrder.descriptionOccurrence;
  const proof = item.statusOrder.proof;

  const products = item.products;

  console.log(ocurrence, descripition);

  return (
    <Scroll>
      <Container>
        <Header title="Pedidos" />
        <Spacing height={10} />
        <ContainerItem style={shadow.primary}>
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
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Products>
                Cód: {item.id} {item.product}
                {"\n"}Quantidade:{item.quantity} {item.unit}
              </Products>
            )}
          />
        </ContainerProducts>

        {proof !== null ? (
          <>
            <Spacing height={10} />
            <ContainerPod
              style={shadow.primary}
              onPress={() => {
                Linking.openURL(proof);
              }}
            >
              <Pod width={41} height={30} fill={colorIcon} />
              <TitlePod>Comprovante já disponível</TitlePod>
            </ContainerPod>
          </>
        ) : null}
        <Spacing height={10} />
        {ocurrence !== null ? (
          <ContainerOcurrence style={shadow.primary}>
            <Row>
              <Ocurrence width={35} height={35} fill={colorIcon} />
              <TitleOcurrence>Ocorrencia</TitleOcurrence>
            </Row>
            <DescriptionOcurrence>{ocurrence}</DescriptionOcurrence>
            <DescriptionOcurrence>{descripition}</DescriptionOcurrence>
          </ContainerOcurrence>
        ) : null}
        <Spacing height={10} />
      </Container>
    </Scroll>
  );
}
