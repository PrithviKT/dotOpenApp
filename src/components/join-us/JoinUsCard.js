import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';

export function JoinUsCard(props) {
    return (
        <Card containerStyle={{
            height: 60,
            width: 190,
            borderRadius: 2,
            padding: 0,
            border: 0,
            marginRight: 0
        }} >
            <View style={{ flexDirection: 'row', margin: 0, padding: 0, marginLeft: -10 }}>
                <Image source={props.logo} style={{width: 207, height: 58}} />
            </View>
        </Card>
    );
}

export default JoinUsCard;