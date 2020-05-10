import React from 'react';
import { View, Text } from 'react-native';

export interface Item {
    ref: string;
    title: string;
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
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: 'grey',
                borderStyle: 'solid',
                backgroundColor,
            }}
        >
            <View style={{ flex: 5 }}>
                <Text>{item.title}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text>{item.from}</Text>
            </View>
        </View>
    );
};

export default ProgramItem;
