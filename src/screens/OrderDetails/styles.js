import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Scroll = styled.ScrollView`
`;
export const ContainerItem = styled.View`
  padding-left: 15px;
  width: 95%;
  height: 75px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const StatusImage = styled.Image``;
export const Column = styled.View`
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
  height: 250px;
  align-self: center;
  border-radius: 3px;
  padding: 15px 0px;
`;
export const FlatList = styled.FlatList`
  flex: 1;
`;
export const TitleProducts = styled.Text`
  font-size: 18px;
  padding-left: 15px;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-width: 0.5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ColumnProducts = styled.View`
  margin-left: 34px;
  flex: 1;
`;
export const Products = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  width: 95%;
  padding-left: 20px;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerPod = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 3px;
  align-self: center;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const TitlePod = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerOcurrence = styled.View`
  width: 95%;
  border-radius: 3px;
  align-self: center;
  padding-left: 15px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const TitleOcurrence = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const DescriptionOcurrence = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Row = styled.View`
  margin:10px;
  flex-direction: row;
  align-items: center;
`;
