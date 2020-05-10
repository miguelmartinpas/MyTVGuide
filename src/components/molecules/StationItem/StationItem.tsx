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
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={() => onPress(item.ref)}
            underlayColor={'white'}
        >
            <View style={{ flexDirection: 'column' }}>
                <Text
                    style={{
                        flex: 1,
                        paddingTop: 10,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        height: 15,
                        fontWeight: 'bold',
                    }}
                >
                    {item.station}
                </Text>
                <View style={{ flex: 1, paddingBottom: 20 }}>
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
