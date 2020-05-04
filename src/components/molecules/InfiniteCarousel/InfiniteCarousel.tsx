import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';

export interface Item {
    ref: string;
    title: string;
    image: string;
}

interface FlatListItem {
    item: Item;
    index: number;
}

interface Props {
    items: Item[];
}

const InfiniteCarousel = ({ items }: Props) => {
    const renderItem = ({ item }: FlatListItem): React.ReactElement => {
        // console.log('render', item.title, item.image);
        return (
            <View key={item.ref}>
                <Image
                    source={{ uri: item.image }}
                    resizeMethod="resize"
                    style={{ width: item.width, height: item.height }}
                />
                <Text>{item.title}</Text>
            </View>
        );
    };
    if (items.length) {
        console.log('InfiniteCarousel > items: ', items);
    }
    return (
        <View>
            <FlatList
                horizontal
                refreshing={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={true}
                renderItem={(data: FlatListItem) => renderItem(data)}
                data={items}
                keyExtractor={(item: Item, index: number) => index.toString()}
                onEndReached={() => {
                    console.log('end reached!!');
                }}
                onEndReachedThreshold={1.5}
            />
        </View>
    );
};

export default InfiniteCarousel;
