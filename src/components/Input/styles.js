import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;
    border-bottom-color: ${({theme}) => theme.colors.bottomInput};
    border-bottom-width: 2px;
    justify-content: center;
    border-radius: 3px;
    padding-left: 10px;
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.colors.placeholderText,
}))`
font-family: ${({ theme }) => theme.fonts.bold};
font-size: 18px;
color: ${({ theme }) => theme.colors.secondary};
`;