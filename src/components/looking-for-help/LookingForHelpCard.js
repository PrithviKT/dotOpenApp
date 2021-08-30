import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';
import UHG_THEME from '../../constants/Style';

export function LookingForHelpCard(props) {
    return (
        <Card containerStyle={{
            height: 120,
            width: 190,
            borderRadius: 6,
            padding: 0,
            border: 1,
            borderColor: UHG_THEME.COLORS.PRIMARY,
            marginRight: 0,
            backgroundColor: "#ffffff"
        }} >
            <View style={{ flexDirection: 'row', margin: 0, padding: 0, paddingTop: 10 }}>
                <View style={{
                    flex: 1,
                    margin: 0,
                    padding: 0,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image source={props.logo} style={{
                        width: 80, height: 80
                    }} />
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: "bold",
                        color: UHG_THEME.COLORS.PRIMARY,
                        textAlign: "center"
                    }}>
                        <Text>{props.content}</Text>
                    </View>
                </View>
            </View>
        </Card>
    );
}

export default LookingForHelpCard;