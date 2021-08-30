import * as React from 'react';
import { View, Text } from 'react-native';
import UHG_THEME from '../constants/Style';

export function UHGHeading({ title }) {
    return (
        <Text style={{
            fontSize: 16,
            fontWeight: "bold",
            color: UHG_THEME.COLORS.PRIMARY
        }}>{title}</Text>
    );
}

export default UHGHeading;