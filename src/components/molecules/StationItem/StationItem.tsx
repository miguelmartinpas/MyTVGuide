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
                backgroundColor: '#ECEBE7',
                minWidth: 100,
                justifyContent: 'center',
                alignItems: 'center',

            }}
            onPress={() => onPress(item.ref)}
            underlayColor={'#FFF00'}
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
                <View style={{
                    flex: 6,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingBottom: 10
                }}>
                    <View style={{
                        backgroundColor: selected === item.ref ? '#FFF' : '#ECEBE7',
                        maxHeight: 80,
                        maxWidth: 100,
                        minHeight: 60,
                        minWidth: 80,
                        padding: 5,
                        borderWidth: 1,
                        borderColor: 'grey',
                        borderStyle: 'solid',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Image
                        source={item.image}
                        resizeMethod="resize"
                        style={{ width: item.width, height: item.height }}
                    />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default StationItem;
