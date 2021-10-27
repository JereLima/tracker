import React from 'react';
import { Container, Text } from './styles';

export default function Button({
    title,
}) {
 return (
   <Container>
       <Text>{title}</Text>
   </Container>
  );
}

