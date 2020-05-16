import React from 'react';

interface HocProps {
    data?: any;
}

const withPrograms = <P extends object>(Component: React.ComponentType<P>) => {
    const WithPrograms = (props: P & HocProps) => {
        const { data = {} } = props;
        return <Component {...props} programs={data.programs} />;
    };
    return WithPrograms;
};

export default withPrograms;
