import React from 'react';
import { View } from 'react-native';
import Guide from '../Guide';

const Site = () => {
    return <View style={{
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    }}>
        <Guide />
    </View>;
};

export default Site;
