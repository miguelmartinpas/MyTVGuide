import React from 'react';
import 'react-native';
import InfiniteList from '../InfiniteList';
import ProgramItem from '../ProgramItem';

interface Props {
    items: any;
    style: any;
}

const ProgramsList = ({ items, style={} }: Props) => {
    return <InfiniteList style={style} items={items} component={ProgramItem} />;
};

export default ProgramsList;
