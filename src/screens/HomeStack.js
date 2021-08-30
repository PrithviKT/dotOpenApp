import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeBannerFlatList from '../components/home-banner/HomeBannerFlatList';
import Partners from '../components/partners/Partners';
import LookingForHelp from '../components/looking-for-help/LookingForHelp';
import OpenCommunity from '../components/community/OpenCommunity';
import JoinUs from '../components/join-us/JoinUs';
import { ScrollView } from 'react-native-gesture-handler';

export function HomeStack(props) {
    const items = [1, 2, 3, 4, 5];
    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                        <View style={{ height: 215, marginRight: 10 }}>
                            <HomeBannerFlatList items={items} />
                        </View>
                    </View>
                    <View >
                        <OpenCommunity />
                    </View>
                    <View>
                        <Partners />
                    </View>
                    <View>
                        <LookingForHelp />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default HomeStack;