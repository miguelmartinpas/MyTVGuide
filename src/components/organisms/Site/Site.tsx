import React from 'react';
import { View, Text } from 'react-native';
import withData from '../../higherOrder/withData';

interface Props {
    data?: any;
}

const Site = ({ data }: Props) => {
    return (
        <View>
            <Text>Site!!!!!!!!!!!!!!!!</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </View>
    );
};

export default withData(Site);
