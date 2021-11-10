import React from 'react';
import { View, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { widthDevice } from '../../theme/metrics';

export default function Carroussel() {
    const myWidth = Dimensions.get('window').width;

    const news = [
        {id:1, title: 'Cargas no brasil', link: 'www.teste.com.br'},
        {id:2, title: 'Carga Pesada', link: 'www.teste.com.br'},
        {id:3, title: 'Novidades pelo Mundo', link: 'www.teste.com.br'},
    ]

    const RenderItems = () => {
        return(
          <Items>
            <Title>Teste um</Title>
        </Items>  
        )
    };

 return (
   <Container>
       <FlatListComponent
            scrollEnabled
            horizontal
            data={news}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => <RenderItems data={item, index}/> }
       />
   </Container>
  );
}

const Container = styled.View`
    width: 100%;
    height: 100px;
    background-color: blueviolet;
    justify-content: center;
    align-items: center;
`;
const Items = styled.View`
    width: 200px;
    height: 50px;
    background-color: black;
    margin: 5px;
`;
const Title = styled.Text``;
const FlatListComponent = styled(FlatList)`
    background-color: greenyellow;
`;