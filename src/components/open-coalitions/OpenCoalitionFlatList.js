

import * as React from 'react';
import { FlatList } from 'react-native';
import OpenCoalitionCard from './OpenCoalitionCard';

export function OpenCoalitionFlatList({items}) {
    
    const IMAGE_WIDTH = 130;
    const OFFSET = 20;
    const odd_bg = require('../../../assets/icons/open-coalition/coalition_bg_odd.png');
    const even_bg = require('../../../assets/icons/open-coalition/coalition_bg_even.png');

    return (
        <FlatList
            style={{
                flexGrow: 0
            }}
            data={items}
            renderItem={(item) => {
                const index = item.index;
                item = item.item;
                const bgImg = index%2 === 0 ? even_bg : odd_bg;
                return (<OpenCoalitionCard item={item} bgImg={bgImg}/>)
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

export default OpenCoalitionFlatList;