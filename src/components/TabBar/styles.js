import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 60px;
  background-color: ${({theme}) => theme.colors.primary};
  border-top-color: ${({theme}) => theme.colors.secondary};
  border-top-width: 0.3px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TabItem = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;