import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled(SafeAreaView)`
      flex: 1;
      background-color: ${({ theme }) => theme.colors.background};
`;
export const Avatar = styled.Image`
      width: 120px;
      height: 120px;
      background-color: #aaa;
      border-radius: 70px;
      align-self: center;
`;
export const Name = styled.Text`
      color: ${({theme}) => theme.colors.secondary};
      font-family: ${({theme}) => theme.fonts.bold};
      font-size: 25px;
      align-self: center;
`;
export const Email = styled.Text`
      color: ${({theme}) => theme.colors.secondary};
      font-family: ${({theme}) => theme.fonts.bold};
      font-size: 20px;
      align-self: center;
`;
export const Wrapper = styled.View`
      background-color: ${({theme}) => theme.colors.primary};
      width: 80%;
      align-self: center;
      border-radius: 10px ;
      padding:10px;
      padding-left: 30px ;
      align-items: flex-start;

`;
export const Store = styled.Text`
      color: ${({theme}) => theme.colors.secondary};
      font-family: ${({theme}) => theme.fonts.bold};
      font-size: 20px;
`;
