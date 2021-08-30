import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import { View } from 'react-native';
import product_suites from '../../constants/mocks/productSuitesData';
import ProductsSuiteFlatList from './ProductsSuiteFlatList';

export function ProductSuites(props) {
    const productSuites = product_suites;
    return (
        <View style={{ marginRight: 10 }}>
            <UHGContainer>
                <UHGHeading title="Product Suites" />
            </UHGContainer>
            <View style={{ paddingLeft: 0, paddingRight: 10 }}>
                <ProductsSuiteFlatList items={productSuites} />
            </View>
        </View>
    );
}

export default ProductSuites;