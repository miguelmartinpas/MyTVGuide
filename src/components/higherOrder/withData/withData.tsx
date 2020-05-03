import React, { useState, useEffect } from 'react';
import api from '../../../services/Api';

interface HocProps {
    data?: any;
}

const withData = <P extends object>(Component: React.ComponentType<P>) => {
    const WithData = (props: P & HocProps) => {
        const [data, setData] = useState({});
        useEffect(() => {
            const fetchDataAsync = async () => {
                const currentData = await api.loadCurrentDate();
                setData(currentData.data || {});
            };
            fetchDataAsync();
        }, []);
        return <Component {...props} data={data} />;
    };
    return WithData;
};

export default withData;
