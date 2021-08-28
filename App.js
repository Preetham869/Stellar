import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DailyPicScreen from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCrafts';
import StarMapScreen from './screens/StarMap';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        intialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
