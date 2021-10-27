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
  placeholderTextColor
}) {
  
 return (
   <Container>
       <TextInput
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

