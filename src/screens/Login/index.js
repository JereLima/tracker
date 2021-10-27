import React, { useRef, useState } from "react";
import { Platform, Image} from "react-native";
import styled from "styled-components/native";
import { Button, Input, Spacing } from '../../components';

export default function Login({theme}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const buttonLoginRef = useRef();

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Image source={require('../../../assets/logo.png')} width={120} resizeMode="contain" />
      <Forms>
        <Input
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          returnKeyType="next"
          autoFocus={true}
          onSubmitEditing={() => passwordRef.current.focus()}/>
        <Spacing />
        <Input
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
          inputRef={passwordRef}
          returnKeyType="go"
          onSubmitEditing={() => alert('hshshs')}
          />
        <Spacing />
        <Button title="Entrar"/>
      </Forms>
      <Spacing height={50} />
      <RecoveryPassword>
      <RecoveryPasswordText>Recuperar Senha</RecoveryPasswordText>
      </RecoveryPassword>
    </Container>
  );
}

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #eeee;
`;
const Forms = styled.View`
  width: 95%;
  align-self: center;
`;
const Text = styled.Text`
color: ${props => props.theme.colors.secondary};
font-family: ${props => props.theme.fonts.interRegular};;
`;
const RecoveryPassword = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const RecoveryPasswordText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary };
  font-family: ${({theme}) => theme.fonts.interBold};
`;