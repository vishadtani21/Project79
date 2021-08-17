import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initial
        routeName="HomeScreen"
        screenOptions={{ headerShown: false }}>
        <stack.Screen name="HomeScreen" component={HomeScreen} />
        <stack.Screen name="DailyPic" component={DailyPic} />
        <stack.Screen name="StarMap" component={StarMap} />
        <stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const stack = createStackNavigator();
