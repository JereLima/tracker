import React from 'react';
import { Container, Items, AreaTitle, Image, Title, FlatListComponent} from './styles';

export default function Carroussel() {

    const data = [
      {id: 1, title: 'Desafios Diários', image: require('../../images/porto.jpeg')},
      {id: 2, title: 'Vamos usar tecnologia?', image: require('../../images/porto2.jpeg')},
      {id: 3, title: 'A inovação já começou', image: require('../../images/truck.jpeg')},
    ]

    const RenderItems = ({data}) => {
        return(
          <Items>
            <Image resizeMode="cover" source={data.image}/>
            <AreaTitle>
              <Title>{data.title}</Title>
            </AreaTitle>
        </Items>  
        )
    };

 return (
   <Container>
       <FlatListComponent
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <RenderItems data={item}/> }
       />
   </Container>
  );
}