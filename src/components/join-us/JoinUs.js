import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import JoinUsFlatList from './JoinUsFlatList';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';

export function JoinUs(props) {
    const items = [{
        logo: UHG_IMAGES.ICONS.JOIN_US.GIT_HUB
    }, {
        logo: UHG_IMAGES.ICONS.JOIN_US.TEAMS
    }, {
        logo: UHG_IMAGES.ICONS.JOIN_US.YAMMER
    }];
    return (
        <View style={{ marginRight: 10, marginBottom: 20 }}>
            <UHGContainer>
                <UHGHeading title="Join Us" />
            </UHGContainer>
            <View>
                <JoinUsFlatList items={items} />
            </View>
        </View>
    );
}

export default JoinUs;