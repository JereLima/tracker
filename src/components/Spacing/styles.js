import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: ${props => props.height || 20}px;
`;