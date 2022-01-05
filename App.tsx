import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './src/screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} />
            {"Para agregar rutas se crea un Stack.Screen con nombre de la screen y el component para renderizar"}
          </Stack.Navigator>
        </View>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
