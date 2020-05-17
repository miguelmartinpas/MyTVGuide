import React from 'react';
import { Platform, View, Text } from 'react-native';
import withData from '../../higherOrder/withData';
import withStations from '../../higherOrder/withStations';
import withPrograms from '../../higherOrder/withPrograms';
import parser from '../../../services/Parser';
import { GuideView } from './Guide.styles';
import StationsList from '../../molecules/StationsList';
import ProgramsList from '../../molecules/ProgramsList';
import Loading from '../../molecules/Loading';

interface Props {
    data?: any;
    stations?: any[];
    programs?: any;
}

// EPG https://github.com/SatadruBhattacharjee/react-tv-epg
// tv_grab_es_movistartv https://github.com/MovistarTV/tv_grab_es_movistartv

const Guide = ({ data, stations = [], programs = {} }: Props) => {
    const { useState } = React;

    const stationsItems: any[] = parser.parseStations(stations);
    const [current, setCurrent] = useState<string>(stations[0] && stations[0].code);

    const handleStation = (code: string) => {
        setCurrent(code);
    };

    const renderGuide = () => {
        return (
            <GuideView style={{ flex: 1 }}>
                <StationsList style={{ flex: 3 }} items={stationsItems} selected={current} onPress={handleStation} />
                <ProgramsList style={{ flex: 13 }} items={programs[current]} />
            </GuideView>
        )
    }

    const renderLoading = () => {
        return <Loading items={stationsItems}/>;
    }

    return programs[current] ? renderGuide() : renderLoading();
};

export default withData(withStations(withPrograms(Guide)));
