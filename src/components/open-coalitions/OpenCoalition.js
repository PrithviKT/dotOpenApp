import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';
import OpenCoalitionFlatList from './OpenCoalitionFlatList';

export function OpenCoalition(props) {
    const cardItems = [{
        title: '.OPEN Coalition?',
        logo: UHG_IMAGES.ICONS.OPEN_COALITION.WHAT_IS_COALITION,
        content: 'Overview of how to get started'
    }, {
        title: 'Start a Coalition?',
        logo: UHG_IMAGES.ICONS.OPEN_COALITION.COALITION,
        content: 'Set-up a Coalition'
    }, {
        title: 'Coalition Directory',
        logo: UHG_IMAGES.ICONS.OPEN_COALITION.COALITION_DIRECTORY,
        content: 'Coalitions in-progress and status'
    }]
    return (
        <View style={{ marginRight: 10, marginBottom: 20 }}>
            <UHGContainer>
                <UHGHeading title=".OPEN Coalitions" />
            </UHGContainer>
            <View>
                <OpenCoalitionFlatList items={cardItems} />
            </View>
        </View>
    );
}

export default OpenCoalition;