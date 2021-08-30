

import * as React from 'react';
import { FlatList } from 'react-native';
import { HomeBannerCard } from './HomeBannerCard';

export function HomeBannerFlatList({items}) {
    
    const IMAGE_WIDTH = 310;
    const OFFSET = 10;
    return (
        <FlatList
            style={{
                flexGrow: 0,
            }}
            data={items}
            renderItem={item => {
                return (<HomeBannerCard />)
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

export default HomeBannerFlatList;