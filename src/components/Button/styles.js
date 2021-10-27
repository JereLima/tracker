import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: ${({ theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;
export const Text = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.interRegular};
`;

