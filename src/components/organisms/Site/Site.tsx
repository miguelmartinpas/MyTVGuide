import React from 'react';
import { View } from 'react-native';
import withData from '../../higherOrder/withData';
import withStations from '../../higherOrder/withStations';
import withPrograms from '../../higherOrder/withPrograms';

import InfiniteCarousel from '../../molecules/InfiniteCarousel';

interface Props {
    data?: any;
    stations?: any[];
}

const HTTP_PATH = './assets/';

const getLogoUrl = (code: string) => {
    return `${HTTP_PATH}${code}.png`;
};

const Site = ({ stations = [] }: Props) => {
    const items: any[] = stations.map((station: any) => {
        return {
            ref: station.CODIGO,
            title: station.NOMBRE,
            image: getLogoUrl(station.CODIGO),
        };
    });
    return (
        <View>
            <View>
                <InfiniteCarousel items={items} />
            </View>
        </View>
    );
};

export default withData(withStations(withPrograms(Site)));
