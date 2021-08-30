

import * as React from 'react';
import { FlatList } from 'react-native';
import JoinUsCard from './JoinUsCard';

export function JoinUsFlatList({items}) {
    
    const IMAGE_WIDTH = 200;
    const OFFSET = 20;
    return (
        <FlatList
            style={{
                flexGrow: 0
            }}
            data={items}
            renderItem={item => {
                item = item.item;
                return (<JoinUsCard logo={item.logo} />)
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"start"}
            snapToOffsets={[...Array(items.length)].map((x, i) => (i * (IMAGE_WIDTH) - (OFFSET * 0.5)))}
            pagingEnabled
        />
    );
}

export default JoinUsFlatList;