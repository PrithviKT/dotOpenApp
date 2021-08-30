import * as React from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, Dimensions  } from 'react-native';
import OpenPillars from '../components/open-pillars/OpenPillars';
import JoinUs from '../components/join-us/JoinUs';
import OpenCoalition from '../components/open-coalitions/OpenCoalition';

export function DotOpenStack(props) {

    const width = Dimensions.get('window').width;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                        <Image source={require('../../assets/what_is_open.png')} style={{
                            width, height: 250
                        }} />
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 14,
                            lineHeight: 30,
                            fontWeight: '500',
                            padding: 10
                        }}>UHC.OPEN strategy has four foundational pillars to deliver advanced,
                            modular and de-centralized technology platforms
            for rapid delivery of DIFFERENTIATED healthcare solutions</Text>
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <OpenPillars />
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <OpenCoalition />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    );
}

export default DotOpenStack;