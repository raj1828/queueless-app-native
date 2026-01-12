import "./global.css"
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import TestFile from './src/TestFile';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 16 }}>Home Screen</Text>

       <Text className="text-2xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>

      <Button
        title="Go to Test File"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={TestFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
