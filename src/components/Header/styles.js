import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
`;
export const AreaButton = styled.TouchableOpacity`
  margin-bottom: 7px;
  height: 100%;
  width: 60px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`;
