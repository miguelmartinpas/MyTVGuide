import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

interface Item {
    ref: string;
    title: string;
    station: string;
    image: any;
    width: number;
    height: number;
}

interface Props {
    item: Item;
    selected: any;
    onPress?: any;
}

const StationItem = ({ item, selected = false, onPress }: Props): React.ReactElement => {
    return (
        <TouchableHighlight
            key={item.ref}
            style={{
                backgroundColor: selected === item.ref ? '#FFF' : '#ECEBE7',
                width: 100,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                borderRightWidth: 1,
                borderRightColor: 'grey',
                borderStyle: 'solid'
            }}
            onPress={() => onPress(item.ref)}
            underlayColor={'white'}
        >
            <View style={{ flexDirection: 'column' }}>
                <Text
                    style={{
                        flex: 2,
                        paddingTop: 10,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontWeight: 'bold'
                    }}
                >
                    {item.station}
                </Text>
                <View style={{ flex: 6, justifyContent: 'center',
                alignItems: 'flex-start' }}>
                    <Image
                        source={item.image}
                        resizeMethod="resize"
                        style={{ width: item.width, height: item.height }}
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default StationItem;
