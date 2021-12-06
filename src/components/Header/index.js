import React from 'react';
import { View } from 'react-native';
import { Container, Title } from './styles';
import {shadow} from '../../theme/shadows';

export default function Header({title}) {
 return (
   <Container>
     <Title>{title}</Title>
  </Container>
  );
}