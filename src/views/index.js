import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,
        SafeAreaView,
        Text,
        } 
from 'react-native';
import Home from './home.js';


const Stack = createNativeStackNavigator();

export default RootComponent = function(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}