import React from 'react';
import 'react-native';
import InfiniteList from '../InfiniteList';
import ProgramItem from '../ProgramItem';

interface Props {
    items: any;
}

const ProgramsList = ({ items }: Props) => {
    return <InfiniteList items={items} component={ProgramItem} />;
};

export default ProgramsList;
