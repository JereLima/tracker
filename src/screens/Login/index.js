import React, { useRef, useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { Platform, Image} from "react-native";
import { Container, Forms, RecoveryPassword, RecoveryPasswordText} from './styled';
import { Button, Input, Spacing } from '../../components';

export default function Login({theme}) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const buttonLoginRef = useRef();

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image source={require('../../../assets/logo.png')} width={120} resizeMode="contain" />
      <Forms>
        <Input
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          returnKeyType="next"
          autoFocus={true}
          onSubmitEditing={() => passwordRef.current.focus()}/>
        <Spacing />
        <Input
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
          inputRef={passwordRef}
          returnKeyType="go"
          onSubmitEditing={() => alert('hshshs')}
          />
        <Spacing />
        <Button onPress={() => navigation.navigate('Tab')} title="Entrar"/>
      </Forms>
      <Spacing height={50} />
      <RecoveryPassword>
      <RecoveryPasswordText>Recuperar Senha</RecoveryPasswordText>
      </RecoveryPassword>
    </Container>
  );
}
