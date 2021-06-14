import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Onboarding from './Screens/Onboarding';
import LandingPage from './Screens/LandingPage';
import Register from './Screens/Register';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="onboarding" component={Onboarding} />
          <Stack.Screen name="landingPage" options={{headerShown: false}} component={LandingPage} />
          <Stack.Screen name="register" options={{headerShown: false}} component={Register} />
        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
