import * as React from 'react';
import UHGHeading from '../UHGHeading';
import UHGContainer from '../UHGContainer';
import PartnersFlatList from './PartnersFlatList';
import { View } from 'react-native';
import UHG_IMAGES from '../../constants/Logo';

export function Partners(props) {
    const partners = [{
        logo: UHG_IMAGES.ICONS.PARTNER.ATC
    }, {
        logo: UHG_IMAGES.ICONS.PARTNER.O_E
    },{
        logo: UHG_IMAGES.ICONS.PARTNER.OTU
    }]
    return (
        <View style={{ marginRight: 10 }}>
            <UHGContainer>
                <UHGHeading title=".OPEN Partners" />
            </UHGContainer>
            <View>
                <PartnersFlatList items={partners} />
            </View>
        </View>
    );
}

export default Partners;