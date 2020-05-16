import React from 'react';
import 'react-native';
import InfiniteList from '../InfiniteList';
import StationItem from '../StationItem';

interface Props {
    items: any[];
    selected?: any;
    onPress?: any;
    style?: any;
}

const StationsList = ({ items, selected, onPress, style={} }: Props) => {
    return (
        <InfiniteList style={style} items={items} component={StationItem} horizontal={true} selected={selected} onPress={onPress} />
    );
};

export default StationsList;
