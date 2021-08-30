import * as React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import UHG_THEME from '../../constants/Style';


export function OpenCoalitionCard({ item, bgImg }) {

    return (
        <Card containerStyle={{
            width: 150,
            height: 150,
            padding: 0,
            border: 0,
            marginRight: 0,
            borderColor: '#ffffff'
        }} >
            <View style={{ flexDirection: 'row', margin: 0, padding: 0 }}>
                <View style={{
                    flex: 1,
                    width: 150,
                    height: 150,
                    margin: 0,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <ImageBackground source={bgImg} imageStyle={{ borderRadius: 6 }} style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: null,
                        border: 0,
                        borderColor: '#ffffff'
                    }}>
                        <View style={{
                            flex: 1,
                            margin: 0,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Image source={item.logo} style={{
                                width: 32, height: 32, marginBottom: 5
                            }} />
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                textAlign: 'center',
                                color: UHG_THEME.COLORS.WHITE
                            }}>{item.title}</Text>
                            <Text style={{
                                width: 90,
                                fontSize: 10,
                                textAlign: 'center',
                                color: UHG_THEME.COLORS.WHITE
                            }}>{item.content}</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        </Card>
    );
}

export default OpenCoalitionCard;