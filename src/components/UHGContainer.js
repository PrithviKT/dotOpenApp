import * as React from 'react';
import { View } from 'react-native';

export function UHGContainer(props) {
    return (
        <View style={{
            padding: 20,
            paddingBottom: 0
        }}>{props.children}</View>
    );
}

export default UHGContainer;