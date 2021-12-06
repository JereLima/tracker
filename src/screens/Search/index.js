import React from 'react';
import { Container, WrapperInput } from './styles';
import {Button, Header,Input, Spacing} from '../../components'

export default function Search() {
 return (
   <Container>
     <Header title="Busca" />
     <WrapperInput>
      <Input keyboardType="number-pad" placeholder="Número do pedido..."/>
      <Spacing />
      <Button title="Buscar" />
     </WrapperInput>
   </Container>
  );
}