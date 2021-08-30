

import * as React from 'react';
import { FlatList } from 'react-native';
import ProductCard from './ProductCard';

export function ProductCardFlatList({items}) {

    const products = [1,2,3,4,5];
    const IMAGE_WIDTH = 290;
    const OFFSET = 20;
    return (
        <FlatList
            style={{
                flexGrow: 0,
                paddingBottom: 10
            }}
            data={products}
            renderItem={item => {
                item = item.item;
                return (<ProductCard product={item} products={items}/>)
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"start"}
            snapToOffsets={[...Array(products.length)].map((x, i) => (i * (IMAGE_WIDTH) - (OFFSET * 0.5)))}
            pagingEnabled
        />
    );
}

export default ProductCardFlatList;