import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';

export function PartnersCard(props) {
    return (
        <Card containerStyle={{
            height: 120,
            width: 190,
            borderRadius: 6,
            padding: 0,
            border: 0,
            marginRight: 0,
            backgroundColor: "#ffffff"
        }} >
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image source={props.logo} style={{
                        width: 190, height: 120
                    }} />
                </View>
            </View>
        </Card>
    );
}

export default PartnersCard;