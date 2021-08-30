

import * as React from 'react';
import { FlatList } from 'react-native';
import LookingForHelpCard from './LookingForHelpCard';

export function LookingForFlatList({items}) {
    
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
                return (<LookingForHelpCard logo={item.logo} content={item.content} />)
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

export default LookingForFlatList;