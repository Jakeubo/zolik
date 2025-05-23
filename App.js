import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import NewGameScreen from './screens/NewGameScreen';
import GameScreen from './screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Jakeho Žolík 🃏♠️' }} />
        <Stack.Screen name="NewGame" component={NewGameScreen} options={{ title: 'Nová hra' }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ title: 'Hra' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
