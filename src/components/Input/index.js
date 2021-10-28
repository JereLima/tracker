import React, {useState} from 'react';
import { ThemeConsumer } from 'styled-components/native';
import { Container, TextInput} from './styles';

export default function Input({
  onPress,
  onChangeText,
  value,
  defautValue,
  placeholder,
  inputRef,
  onSubmitEditing,
  returnKeyType,
  autoFocus,
  placeholderTextColor,
  keyboardType,
  secureTextEntry
}) {
  
 return (
   <Container>
       <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        value={value}
        defautValue={defautValue}
        placeholder={placeholder}
        borderBottom={false}
        ref={inputRef}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        />
   </Container>
  );
}

