import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;
export const ContainerItem = styled.View`
  padding-left: 15px;
  width: 95%;
  height: 75px;
  align-self: center;
  background-color: pink;
  flex-direction: row;
  align-items: center;
`;
export const StatusImage = styled.Image``;
export const Column = styled.View`
  background-color: blanchedalmond;
  margin-left: 34px;
`;
export const Status = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const OrderNumber = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerPosition = styled.View`
  width: 95%;
  height: 50px;
  flex-direction: row;
  align-self: center;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: 15px;
  align-items: center;
`;
export const TextLocation = styled.Text`
  font-size: 18px;
  margin-left: 34px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerProducts = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 95%;
  height: 200px;
  align-self: center;
  border-radius: 3px;
`;
export const FlatList = styled.FlatList`
    flex: 1;
`;
export const TitleProducts = styled.Text`
  font-size: 18px;
  margin-bottom: 15px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Row = styled.View`
  margin-left: 15px;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  background-color: azure;
`;
export const ColumnProducts = styled.View`
    margin-left: 34px;
    flex: 1;
`;
export const Products = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ContainerPod = styled.View`
  min-height: 100px;
  background-color: aquamarine;
`;
export const ContainerOcurrence = styled.View`
  min-height: 100px;
  background-color: firebrick;
`;
