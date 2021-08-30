import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';
import CommunityFlatList from './CommunityFlatList';

export function OpenCommunity(props) {
    const cardItems = [{
        title: 'What is UHC .OPEN',
        logo: UHG_IMAGES.ICONS.COMMUNITY.DOT_OPEN,
        content: 'Overview of UHC .OPEN strategy to colloberate and deliver platform solutions'
    }, {
        title: 'What is Coalition',
        logo: UHG_IMAGES.ICONS.COMMUNITY.COALITION,
        content: 'Overview of UHC .OPEN strategy to colloberate and deliver platform solutions'
    }, {
        title: 'What is UHC Product',
        logo: UHG_IMAGES.ICONS.COMMUNITY.PRODUCT,
        content: 'Overview of UHC .OPEN strategy to colloberate and deliver platform solutions'
    }, {
        title: 'What is UHC Engineering Accelerator',
        logo: UHG_IMAGES.ICONS.COMMUNITY.ENGINEER,
        content: 'Overview of UHC .OPEN strategy to colloberate and deliver platform solutions'
    }]
    return (
        <View style={{ marginRight: 10 }}>
            <UHGContainer>
                <UHGHeading title=".OPEN Community" />
            </UHGContainer>
            <View>
                <CommunityFlatList items={cardItems}/>
            </View>
        </View>
    );
}

export default OpenCommunity;