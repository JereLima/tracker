import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export default function Login() {
  return (
    <Container>
      <Box>
        <Title>Testando</Title>
      </Box>
    </Container>
  );
}

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Box = styled.View`
  width: 200px;
  height: 200px;
  background-color: ${({theme}) => theme.danger};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: black;
`;
