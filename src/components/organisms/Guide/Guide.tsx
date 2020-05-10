import React from 'react';
import { Platform } from 'react-native';
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

const Guide = ({ stations = [], programs = {} }: Props) => {
    const { useState } = React;
    const stationsItems: any[] = parser.parseStations(stations);

    const initStation: string = stations[0].code;
    const initProgramItems: any[] = parser.parsePrograms(programs[stations[0].code]);

    const [currentStation, setCurrentStation] = useState<string>(initStation);
    const [programItems, setProgramItems] = useState<any[]>(initProgramItems);

    const handleStation = (code: string) => {
        setCurrentStation(code);
        setProgramItems(parser.parsePrograms(programs[code]));
    };

    return (
        <GuideView style={{ marginTop: Platform.OS === 'ios' ? 30 : 0 }}>
            <StationsList items={stationsItems} selected={currentStation} onPress={handleStation} />
            <ProgramsList items={programItems.length ? programItems : initProgramItems} />
        </GuideView>
    );
};

export default withData(withStations(withPrograms(Guide)));
