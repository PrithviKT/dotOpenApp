import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';
import UHG_THEME from '../../constants/Style';
import { LinearGradient } from 'expo-linear-gradient';

export function HomeBannerCard(props) {
    return (
        <Card containerStyle={{ height: 200, width: 300, borderRadius: 10, padding: 0, border: 0, marginRight: 0}} >
            <LinearGradient colors={['#196ecf', '#1665c4', '#0e50aa']}
                start={[0, 0]}
                end={[1, 1]}
                location={[1, 0.5, 1]} style={{
                    height: 200,
                    borderRadius: 10
                }}>
                <View style={{ flexDirection: 'row', flex: 1, paddingLeft: 20, paddingRight: 20 }}>

                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../../assets/logo/open_mic.png')} style={{
                            width: 60, height: 80
                        }} />
                    </View>
                    <View style={{ flex: 3, justifyContent: "center" }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: UHG_THEME.COLORS.WHITE,
                            margin: 10
                        }}>.OPEN MIC</Text>
                        <Text style={{
                            fontWeight: "normal",
                            fontSize: 12,
                            color: UHG_THEME.COLORS.WHITE,
                            margin: 10,
                            textAlign: "justify"
                        }}>In this first edition of .OPEN MIC, UHC CTO Julie Durham welcomes
                                            Josh Cutler as the new ChiefData Scientist</Text>
                        <View style={{
                            color: UHG_THEME.COLORS.PRIMARY,
                            margin: 10,
                            backgroundColor: UHG_THEME.COLORS.WHITE,
                            width: 90,
                            height: 25,
                            paddingTop: 4,
                            paddingRight: 10,
                            paddingLeft: 10,
                            borderRadius: 100
                        }}><Text style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: UHG_THEME.COLORS.PRIMARY
                        }}>Watch Now</Text></View>
                    </View>

                </View>
            </LinearGradient>
        </Card>
    );
}

export default HomeBannerCard;