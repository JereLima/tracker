import styled from 'styled-components/native';
import { widthDevice } from '../../theme/metrics';

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
`;
export const Items = styled.TouchableOpacity`
    width: ${widthDevice - 100}px;
    height: ${widthDevice / 3}px;
    background-color: white;
    margin-left: 15px;
    margin-right: 20px;
    align-self: center;
    border-radius: 10px;
`;
export const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;
export const AreaTitle = styled.View`
    background-color: #222a;
    position: absolute;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    margin: 5px;
`;
export const Title = styled.Text`
    color: whitesmoke;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular }
`;
export const FlatListComponent = styled.FlatList``;
