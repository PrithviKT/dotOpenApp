import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';
import OpenPillarFlatList from './OpenPillarFlatList';

export function OpenPillars(props) {
    const cardItems = [{
        title: 'Federated Development',
        logo: UHG_IMAGES.ICONS.PILLARS.FEDERATE
    }, {
        title: 'Continuous Learning',
        logo: UHG_IMAGES.ICONS.PILLARS.CONTINUOUS_LEARNING
    }, {
        title: 'Products on Platforms',
        logo: UHG_IMAGES.ICONS.PILLARS.PRODUCT_PLATFORM
    }, {
        title: 'Product Capability Roadmap',
        logo: UHG_IMAGES.ICONS.PILLARS.PRODUCT_ROADMAP
    }]
    return (
        <View style={{ marginRight: 10, marginBottom: 20 }}>
            <UHGContainer>
                <UHGHeading title=".OPEN Pillars" />
            </UHGContainer>
            <View>
                <OpenPillarFlatList items={cardItems} />
            </View>
        </View>
    );
}

export default OpenPillars;