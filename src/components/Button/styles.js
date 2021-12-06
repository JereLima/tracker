import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    height: 60px;
    width: 100%;
    border-radius: 3px;
    background-color: ${({ theme}) => theme.colors.secondary};
    justify-content: center;
    align-items: center;
`;
export const Text = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.colorTextButton};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

