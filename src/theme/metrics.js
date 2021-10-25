import { Dimensions, PixelRatio } from 'react-native';

const {width} = Dimensions.get('window');

const defaultWidth = 375;

const px = (valuePixel) => {
    const widthPercent = (valuePixel/defaultWidth * 100)
    const screenPixel = PixelRatio.roundToNearestPixel(
        (width * parseFloat(widthPercent)) / 100
    )
    return screenPixel;
};

export const metrics = {px}