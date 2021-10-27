import { PixelRatio } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;
    background-color: ${({ theme}) => theme.colors.input};
    border-bottom-color: ${({theme}) => theme.colors.secondary};
    border-bottom-width: 1px;
    justify-content: center;
    border-radius: 3px;
    padding-left: 10px;
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.colors.primary,
}))`
font-family: ${({ theme }) => theme.fonts.interBold};
font-size: 18px;
color: ${({ theme }) => theme.colors.primary};
`;