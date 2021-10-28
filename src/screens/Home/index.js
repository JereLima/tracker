import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper'


export default function Home() {
 return (
   <Container>
       <Header>
           <Logo resizeMode="contain" source={require('../../../assets/logo.png')} />
            <WrapperText>
                <Hello>Olá</Hello>
                <Name>Jeremias</Name>
            </WrapperText>
       </Header>
        <News>
            <SwiperContainer>
            <SwiperItem>
            <SwiperText>Text 1</SwiperText>
            </SwiperItem>
            <SwiperItem>
            <SwiperText>Text 2</SwiperText>
            </SwiperItem>
            <SwiperItem>
            <SwiperText>Text 3</SwiperText>
            </SwiperItem>
      </SwiperContainer>
        </News>
       
       <Favorites>Favorites</Favorites>
       <FavoritesList></FavoritesList>
       <EmpityFavorites>Nada por aqui no momento</EmpityFavorites>
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
const News = styled.View`
    height: 30%;
    width: 100%;
    background-color: black;
`;
const SwiperContainer = styled(Swiper)`
    background-color: pink;
    padding: 10px;
`;
const SwiperItem = styled.View`
    border-radius: 5px;
    background-color: blue;
    align-self: center;
`;
const SwiperText = styled.Text`
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
    font-family: ${({ theme }) => theme.fonts.interBold};
    color: ${({ theme }) => theme.colors.font};

`;
const Name = styled.Text`
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.interBold};
    color: ${({ theme }) => theme.colors.font};
`;
const Favorites = styled.Text`
    padding-left: 15px;
    font-family: ${({ theme }) => theme.fonts.interBold};
    font-size: 30px;
    color: ${({ theme }) => theme.colors.font};

`;
const FavoritesList = styled.View``;
const EmpityFavorites = styled.Text`
    font-family: ${({ theme }) => theme.fonts.interBold};
    color: ${({ theme }) => theme.colors.font};
`;

// const FavoritesList = styled.View``;
// const FavoritesList = styled.View``;