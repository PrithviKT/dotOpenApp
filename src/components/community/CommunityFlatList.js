

import * as React from 'react';
import { FlatList } from 'react-native';
import CommunityCard from './CommunityCard';

export function CommunityFlatList({items}) {
    
    const IMAGE_WIDTH = 310;
    const OFFSET = 20;
    return (
        <FlatList
            style={{
                flexGrow: 0,
                paddingBottom: 15
            }}
            data={items}
            renderItem={item => {
                item = item.item;
                return (<CommunityCard title={item.title} logo={item.logo} content={item.content} />)
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

export default CommunityFlatList;