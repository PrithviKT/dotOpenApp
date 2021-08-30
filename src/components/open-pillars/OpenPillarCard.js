import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';
import UHG_THEME from '../../constants/Style';

export function OpenPillarCard(props) {
    return (
        <Card containerStyle={{
            height: 100,
            width: 220,
            borderRadius: 6,
            padding: 0,
            border: 0,
            marginRight: 0,
            backgroundColor: "#ffffff"
        }} >
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                    <Image source={props.logo} style={{
                        width: 80, height: 80, marginLeft: 10, marginTop: 10
                    }} />
                </View>
                <View style={{ flex: 3, justifyContent: "center", marginLeft: 10 }}>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: UHG_THEME.COLORS.ACCENT,
                        margin: 10,
                        marginBottom: 0
                    }}>{props.title}</Text>
                </View>

            </View>
        </Card>
    );
}

export default OpenPillarCard;