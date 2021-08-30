import * as React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';


export function ProductSuiteCard({ item, bgImg }) {

    return (
        <Card containerStyle={{
            height: 120,
            width: 120,
            padding: 0,
            border: 0,
            marginRight: 0,
            borderColor: '#ffffff'
        }} >
            <View style={{ flexDirection: 'row', margin: 0, padding: 0 }}>
                <View style={{
                    flex: 1,
                    width: 120,
                    margin: 0,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 120
                }}>
                    <ImageBackground source={bgImg} imageStyle={{ borderRadius: 6}} style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: null,
                        border: 0,
                        borderColor: '#ffffff'
                    }}>
                        <View style={{
                            flex: 1,
                            width: 120,
                            margin: 0,
                            alignItems: "center",
                            justifyContent: "center",
                            height: 120
                        }}>
                            <Text style={{ fontSize: 12, fontWeight: "bold",textAlign: 'center' }}>{item.productSuite}</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        </Card>
    );
}

export default ProductSuiteCard;