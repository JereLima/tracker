import React from 'react';
import { View, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { widthDevice } from '../../theme/metrics';

export default function Carroussel() {

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
            showsHorizontalScrollIndicator={false}
            horizontal
            data={news}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => <RenderItems data={item, index}/> }
       />
   </Container>
  );
}

const Container = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    align-self: center;
`;
const Items = styled.TouchableOpacity`
    width: ${widthDevice - 100}px;
    height: ${widthDevice / 3}px;
    background-color: black;
    margin-left: 10px;
    align-self: center;
    border-radius: 10px;
`;
const Title = styled.Text``;
const FlatListComponent = styled(FlatList)`
`;