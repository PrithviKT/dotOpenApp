

import * as React from 'react';
import { FlatList } from 'react-native';
import PartnersCard from './PartnersCard';

export function PartnersFlatList({items}) {
    
    const IMAGE_WIDTH = 170;
    const OFFSET = 20;
    return (
        <FlatList
            style={{
                flexGrow: 0
            }}
            data={items}
            renderItem={item => {
                item = item.item;
                return (<PartnersCard logo={item.logo} />)
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

export default PartnersFlatList;