import * as React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import UHG_THEME from '../../constants/Style';


export function ProductSuiteCard({ product, products }) {
    return (
        <Card containerStyle={{
            height: 250,
            width: 280,
            padding: 0,
            borderRadius: 10,
            marginRight: 0,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11
        }} >
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: UHG_THEME.COLORS.PRIMARY,
                        padding: 5,
                        minHeight: 20
                    }}>{products[0].product_family}</Text>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: UHG_THEME.COLORS.LIGHT_GREY,
                padding: 10,
                paddingTop: 5,
                paddingBottom: 5
            }}>
                <View style={{
                    flex: 3
                }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: UHG_THEME.COLORS.ACCENT }}>Product Capability</Text>
                </View>
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: UHG_THEME.COLORS.ACCENT }}>No of App</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, marginBottom: 10, height: 200 }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {products.length ? products.map(productItem => {
                            return (<View key={productItem.productId} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10,
                                paddingTop: 5,
                                paddingBottom: 5,
                                marginBottom: 5
                            }}>
                                <View style={{ flex: 3 }}>
                                    <Text style={{ fontSize: 12 }}>{productItem.product}</Text>
                                </View>
                                <View style={{
                                    flex: 1, alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{productItem.totalApplication}</Text>
                                </View>
                            </View>)
                        }) : (<View><Text>No Product Details</Text></View>)}
                    </ScrollView>
                </View>
            </View>
        </Card>
    );
}

export default ProductSuiteCard;