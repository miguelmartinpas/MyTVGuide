import React from 'react';
import { View, Text } from 'react-native';

export interface Item {
    ref: string;
    title: string;
    category: string;
    from: string;
    to: string;
}

interface Props {
    item: Item;
    backgroundColor?: string;
}

const ProgramItem = ({ item, backgroundColor = '#FFF' }: Props): React.ReactElement => {
    return (
        <View
            key={item.ref}
            style={{
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                borderStyle: 'solid',
                backgroundColor,
            }}
        >
            <View style={{ flex: 5, flexDirection: 'column' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'gray' }}>{item.category}</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <Text>{item.title}</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'stretch' }}>
                <Text>{item.from}</Text>
            </View>
        </View>
    );
};

export default ProgramItem;
