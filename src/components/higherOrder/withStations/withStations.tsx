import React from 'react';
import extendStations from '../../../mocks/stations.json';

const stationKey = 'DATOS_CADENA';

interface HocProps {
    data?: any;
}

const withStations = <P extends object>(Component: React.ComponentType<P>) => {
    const WithStations = (props: P & HocProps) => {
        // const { data = {} } = props;
        // const stations: any = Object.keys(data).map((mainCode) => {
        //     return data[mainCode][stationKey];
        // });
        // if (stations.length) {
        //     console.log('stations', stations);
        // }
        return <Component {...props} stations={extendStations} />;
    };
    return WithStations;
};

export default withStations;
