import React, {  } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Carroussel, CardOrder } from "../../components";
import db from "../../db.json";

export default function Home({ navigation }) {
  return (
    <Container>
      <Header>
        <Logo
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />
        <WrapperText>
          <Hello>Olá</Hello>
          <Name>Jeremias</Name>
        </WrapperText>
      </Header>
      <Carroussel />
      <Favorites>Favoritas</Favorites>
      <FlatList
        data={db.orders}
        keyExtractor={(item) => item.numberOrder}
        renderItem={({ item }) => <CardOrder data={item} />}
      />
      {/* <EmpityFavorites>Nenhuma nota favorita nesse momento....{'\n'}Vamos buscar?</EmpityFavorites> */}
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
const Header = styled.View`
  flex-direction: row;
`;
const Theme = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: pink;
  position: absolute;
  right: 20px;
  top: 20px;
`;
const Logo = styled.Image`
  width: 80px;
  height: 80px;
  margin: 5%;
`;
const WrapperText = styled.View`
  padding-left: 15px;
  padding-top: 15px;
  flex: 1;
`;
const Hello = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;
const Name = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;
const Favorites = styled.Text`
  padding-left: 15px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 5%;
  margin-bottom: 10px;
`;
const FavoritesList = styled.View``;
const EmpityFavorites = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  align-self: center;
  margin-top: 10%;
`;
