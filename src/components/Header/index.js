import React from "react";
import { Container, Title, AreaButton } from "./styles";
import Backbutton from "../../images/icons/back.svg";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/core";

export default function Header({ title }) {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Container>
      <AreaButton onPress={() => navigation.goBack()} >
        <Backbutton height={30} fill={theme.colors.secondary} />
      </AreaButton>
      <Title>{title}</Title>
    </Container>
  );
}
