import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { UHG_THEME } from '../constants/Style';
import { UHG_IMAGES } from '../constants/Logo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import DotOpenStack from './DotOpenStack';
import ProductStack from './ProductStack';
import AcceleratorStack from './AcceleratorStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export function TabBarIcon({ label, color, iconImg, selected, activeIconImg }) {
    let icon = ''
    let selectedStyles = {};
    if (selected) {
        icon = activeIconImg;
        selectedStyles.backgroundColor = UHG_THEME.COLORS.ACCENT
    } else {
        icon = iconImg;
        selectedStyles.backgroundColor = UHG_THEME.COLORS.PRIMARY
    }
    return (
        <View style={{
            alignItems: 'center', justifyContent: 'center'
        }}>
            <Image
                source={icon}
                style={{ width: 30, height: 30, marginTop: 5, marginBottom: 0 }}
            />
            <Text style={{ fontSize: 12, color: color, marginBottom: 4 }}>{label}</Text>
        </View>
    );
}

export function TabView() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: UHG_THEME.COLORS.PRIMARY,
            tabBarInactiveTintColor: UHG_THEME.COLORS.GREY,
            tabBarActiveBackgroundColor: UHG_THEME.COLORS.WHITE,
            tabBarInactiveBackgroundColor: UHG_THEME.COLORS.WHITE,
            tabBarShowLabel: false,
            tabBarStyle: [{
                display: 'flex',
                height: 55,
                borderTopWidth: 1,
                borderTopColor: UHG_THEME.COLORS.LIGHT_GREY,
                shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 6.68,
            elevation: 11
            }]
        }}>
            <Tab.Screen name="Home" component={HomeStack} options={{
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon label="Home"
                        activeIconImg={UHG_IMAGES.ICONS.TABBAR.HOME_SELECTED}
                        iconImg={UHG_IMAGES.ICONS.TABBAR.HOME}
                        color={color} selected={focused} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="DotOpen" component={DotOpenStack} options={{
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon label=".Open"
                        activeIconImg={UHG_IMAGES.ICONS.TABBAR.OPEN_SELECTED}
                        iconImg={UHG_IMAGES.ICONS.TABBAR.OPEN}
                        color={color} selected={focused} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Product" component={ProductStack} options={{
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon label="Product"
                        activeIconImg={UHG_IMAGES.ICONS.TABBAR.PRODUCTS_SELECTED}
                        iconImg={UHG_IMAGES.ICONS.TABBAR.PRODUCTS}
                        color={color} selected={focused} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Accelerators" component={AcceleratorStack} options={{
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon label="Accelerators"
                        activeIconImg={UHG_IMAGES.ICONS.TABBAR.ACCELERATOR_SELECTED}
                        iconImg={UHG_IMAGES.ICONS.TABBAR.ACCELERATOR}
                        color={color} selected={focused} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    );
}

export default TabView;