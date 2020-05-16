import React from 'react';
import extendStations from '../../../services/stations.json';
import enrichment from '../../../services/Enrichment';

interface HocProps {
    data?: any;
}

const withStations = <P extends object>(Component: React.ComponentType<P>) => {
    const WithStations = (props: P & HocProps) => {
        let { stations = [] } = props.data;

        const stationsWithKey = extendStations.reduce((acc, current) => {
            acc[current.code] = current;
            return acc;
        }, {});

        stations = stations.map(station => {
            return { ...stationsWithKey[station.code], ...station };
        });

        return <Component {...props} stations={stations} />;
    };
    return WithStations;
};

export default withStations;
