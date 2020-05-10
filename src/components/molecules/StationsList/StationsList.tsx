import React from 'react';
import 'react-native';
import InfiniteList from '../InfiniteList';
import StationItem from '../StationItem';

interface Props {
    items: any[];
    selected?: any;
    onPress?: any;
}

const StationsList = ({ items, selected, onPress }: Props) => {
    return (
        <InfiniteList items={items} component={StationItem} horizontal={true} selected={selected} onPress={onPress} />
    );
};

export default StationsList;
