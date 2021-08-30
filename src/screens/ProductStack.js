import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { ProductSuites } from '../components/products/ProductSuites';
import { Products } from '../components/products/Products';
import JoinUs from '../components/join-us/JoinUs';

export function ProductStack(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, paddingTop: 0 }}>
                    <View>
                        <ProductSuites />
                    </View>
                    <View>
                        <Products />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default ProductStack;