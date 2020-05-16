import React from 'react';
import { Platform, View, Text } from 'react-native';
import { GuideView } from './Guide.styles';
import StationsList from '../../molecules/StationsList';
import ProgramsList from '../../molecules/ProgramsList';
import withData from '../../higherOrder/withData';
import withStations from '../../higherOrder/withStations';
import withPrograms from '../../higherOrder/withPrograms';
import parser from '../../../services/Parser';

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
    const initStation: string = stations[0] && stations[0].code;
    const [currentStation, setCurrentStation] = useState<string>(initStation);
    const initProgramItems: any[] = stations[0] && programs[stations[0].code] || [];
    const [programItems, setProgramItems] = useState<any[]>(initProgramItems);

    const handleStation = (code: string) => {
        setCurrentStation(code);
        setProgramItems(programs[code]);
    };

    if (!currentStation && initStation) {
        handleStation(initStation)
    }

    return (
        <GuideView style={{ marginTop: Platform.OS === 'ios' ? 30 : 0 }}>
            <StationsList style={{}} items={stationsItems} selected={currentStation} onPress={handleStation} />
            <ProgramsList style={{ marginBottom: 180 }} items={programItems} />
        </GuideView>
    );
};

export default withData(withStations(withPrograms(Guide)));
