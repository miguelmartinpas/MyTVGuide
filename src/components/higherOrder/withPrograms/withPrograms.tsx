import React from 'react';

const stationKey = 'DATOS_CADENA';
const stationCode = 'CODIGO';
const programKey = 'PROGRAMAS';

interface HocProps {
    data?: any;
}

const withPrograms = <P extends object>(Component: React.ComponentType<P>) => {
    const WithPrograms = (props: P & HocProps) => {
        const { data = {} } = props;
        const programs: any = Object.keys(data).reduce((acc: any, mainCode: string) => {
            if (data[mainCode] && data[mainCode][stationKey] && data[mainCode][stationKey][stationCode]) {
                const code = data[mainCode][stationKey][stationCode];
                acc[code] = data[mainCode][programKey];
            }
            return acc;
        }, {});
        // if (Object.keys(programs).length) {
        //     console.log('programs', programs);
        // }
        return <Component {...props} programs={programs} />;
    };
    return WithPrograms;
};

export default withPrograms;
