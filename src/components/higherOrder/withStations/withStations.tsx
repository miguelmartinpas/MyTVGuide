import React from 'react';

const stationKey = 'DATOS_CADENA';

interface HocProps {
    data?: any;
}

const withStations = <P extends object>(Component: React.ComponentType<P>) => {
    const WithStations = (props: P & HocProps) => {
        const { data = {} } = props;
        const stations: any = Object.keys(data).map((mainCode) => {
            return data[mainCode][stationKey];
        });
        // if (stations.length) {
        //     console.log('stations', stations);
        // }
        return <Component {...props} stations={stations} />;
    };
    return WithStations;
};

export default withStations;
