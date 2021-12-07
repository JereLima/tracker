import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 95%;
    height: 80px;
    align-self: center;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 15px;
    background-color: ${({theme}) => theme.colors.primary }; ;

`;
export const Title = styled.Text`
    font-size: 22px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.secondary };

`;
export const Order = styled.Text`
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.bold };
    color: ${({theme}) => theme.colors.secondary };
`;

export const Column = styled.View`
    margin-left: 15px;
`;