import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { UHG_THEME } from '../constants/Style';
import { UHG_IMAGES } from '../constants/Logo';
import { TabView } from '../screens/TabView';
import { SafeAreaView } from 'react-native-safe-area-context';

function Notifications(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications Screen </Text>
        <Button title="show Menu" onPress={() => props.navigation.toggleDrawer()}></Button>
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView
        {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

export function UHGDrawer() {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dot Open" component={TabView} options={{
        headerTintColor: UHG_THEME.COLORS.WHITE,
        headerTitleAlign: 'center',
        headerStyle: {
          height: 60,
          backgroundColor: UHG_THEME.COLORS.PRIMARY
        },
        headerLeft: () => (
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30, marginLeft: 25 }}
              source={UHG_IMAGES.ICONS.USER_PROFILE}
            />
          </TouchableOpacity>

        ),
        headerTitle: () => (
          <Image
            style={{ width: 80, height: 40 }}
            source={UHG_IMAGES.HEADER_ICON}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={UHG_IMAGES.ICONS.NOTIFICATION}
            />
            <Image
              style={{ width: 20, height: 20, marginLeft: 25, marginRight: 25 }}
              source={UHG_IMAGES.ICONS.SEARCH}
            />
          </View>
        )
      }} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
    </SafeAreaView>
  );
}

export default UHGDrawer;