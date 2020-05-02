import React from 'react';
import { FlatList, View, Image } from 'react-native';

interface Item {
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
        return (
            <View>
                <Image source={{ uri: item.image }} />
            </View>
        );
    };

    return (
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
    );
};

export default InfiniteCarousel;
