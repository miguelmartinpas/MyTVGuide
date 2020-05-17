import React from 'react';
import { View, Image,  Dimensions } from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

interface Props {
    items? : any;
}

const Loading = ({ items = [] }: Props): React.ReactElement => {
    const { useState } = React;

    const getRandomIndex = () => Math.round(Math.random(0,1)*(items.length-1));

    const [currentItem, setCurrentItem] = useState<string>(items[getRandomIndex()]);

    setTimeout(() => {
        setCurrentItem(items[getRandomIndex()]);
    }, 1000);

    const { width, height } = Dimensions.get('window');
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e6e5e2'

        }}>
            <WaveIndicator waveMode="fill" waveFactor={0.8} count={2} size={width} color='grey' />
            <Image
                source={currentItem.image}
                resizeMethod="resize"
                style={{
                    width: currentItem.width * 2,
                    height: currentItem.height * 2,
                    position: 'relative',
                    top: -1 * (height-currentItem.height)/2,

                }}
            />
        </View>
    );
};

export default Loading;
