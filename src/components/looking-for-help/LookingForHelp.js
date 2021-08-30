import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import LookingForFlatList from '../looking-for-help/LookingForFlatList';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';

export function LookingForHelp(props) {
    const items = [{
        logo: UHG_IMAGES.ICONS.HELP.WHY,
        content: 'Looking for Help'
    },{
        logo: UHG_IMAGES.ICONS.HELP.PATTERN,
        content: 'Looking for Pattern'
    },{
        logo: UHG_IMAGES.ICONS.HELP.CHAT,
        content: 'Looking for Coalition'
    },{
        logo: UHG_IMAGES.ICONS.HELP.PATTERN,
        content: 'Looking for support'
    }]
    return (
        <View style={{ marginRight: 10, marginBottom: 10 }}>
            <UHGContainer>
                <UHGHeading title="Looking for Help?" />
            </UHGContainer>
            <View>
                <LookingForFlatList items={items} />
            </View>
        </View>
    );
}

export default LookingForHelp;