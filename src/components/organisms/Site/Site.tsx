import React from 'react';
import { View } from 'react-native';
import assets from '../../../services/Assets';
import withData from '../../higherOrder/withData';
import withStations from '../../higherOrder/withStations';
import withPrograms from '../../higherOrder/withPrograms';

import InfiniteCarousel from '../../molecules/InfiniteCarousel';

interface Props {
    data?: any;
    stations?: any[];
}

const Site = ({ stations = [] }: Props) => {
    const items: any[] = stations.map((station: any) => {
        return {
            ref: station.code,
            title: station.title,
            image: assets.getLogoUri(station.code),
            width: station.width,
            height: station.height,
        };
    });
    return (
        <View style={{ marginTop: 100 }}>
            <InfiniteCarousel items={items} />
        </View>
    );
};

export default withData(withStations(withPrograms(Site)));
