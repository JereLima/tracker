import styled from 'styled-components';

export const Container = styled.View`
    height: 80px;
    width: 100%;
    align-items: flex-end;
    justify-content: center;
    padding-right: 30px;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom-width: 0.5px;
    border-bottom-color: gray;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
`;