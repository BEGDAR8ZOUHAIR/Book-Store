// In App.js in a new project

import * as React from 'react';
import { View, Text , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './src/components/Navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Navigation" component={Navigation} />
      </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
      
  );
}

export default App;
