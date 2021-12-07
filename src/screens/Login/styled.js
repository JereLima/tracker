import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;
export const Forms = styled.View`
  width: 95%;
  align-self: center;
`;
export const Text = styled.Text`
color: ${props => props.theme.colors.secondary};
font-family: ${props => props.theme.fonts.regular};;
`;
export const RecoveryPassword = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const RecoveryPasswordText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary };
  font-family: ${({theme}) => theme.fonts.bold};
`;