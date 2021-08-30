import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import { View, Text } from 'react-native';
import { products_data } from '../../constants/mocks/productsData';
import ProductCardFlatList from './ProductCardFlatList';

export function Products(props) {
    const productsData = products_data;
    const productDataStruct = {};

    productsData.forEach(product => {
        if (productDataStruct && product.product_family && productDataStruct[product.product_family] &&
            Array.isArray(productDataStruct[product.product_family])) {
            productDataStruct[product.product_family].push(product);
        } else {
            productDataStruct[product.product_family] = [product];
        }
    });

    return (
        <View style={{ marginRight: 10, marginBottom: 20 }}>
            {Object.keys(productDataStruct).map(function (keyName, keyIndex) {
                return (
                    <View key={keyIndex}>
                        <UHGContainer>
                            <UHGHeading title={keyName} />
                        </UHGContainer>
                        <ProductCardFlatList items={productDataStruct[keyName]}/>
                    </View>
                )
            })}
        </View>
    );
}

export default Products;