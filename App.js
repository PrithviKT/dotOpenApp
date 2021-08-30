import * as React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import UHGDrawer from './src/screens/UHGDrawer';
import UHG_THEME from './src/constants/Style';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UHG_THEME.COLORS.PRIMARY
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={UHG_THEME.COLORS.PRIMARY} barStyle="light-content" />
        <NavigationContainer>
          <UHGDrawer />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
