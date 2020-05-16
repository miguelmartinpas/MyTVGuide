import React from 'react';
import { FlatList, View } from 'react-native';

interface FlatListItem {
    item: any;
    index: number;
}

interface Props {
    items: any[];
    component: any;
    horizontal?: boolean;
    selected?: any;
    onPress?: any;
    style?: any
}

const InfiniteList = ({ items, component, horizontal = false, selected, onPress, style={} }: Props) => {
    const renderItem = ({ item, index }: FlatListItem): React.ReactElement => {
        const Component = component;
        const props = {
            item,
            selected,
            onPress,
            backgroundColor: index % 2 === 0 ? '#e6e5e2' : '#f0efec',
        };
        return <Component key={index} {...props} />;
    };
    return (
        <View style={style}>
            <FlatList
                horizontal={horizontal}
                refreshing={true}
                showsHorizontalScrollIndicator={false}
                removeClippedSubviews={true}
                renderItem={(data: FlatListItem) => renderItem(data)}
                data={items}
                keyExtractor={(item: any, index: number) => index.toString()}
            />
        </View>
    );
};

export default InfiniteList;
