import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect, useRef  } from "react";
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        SafeAreaView,
        Image,
        Dimensions} 
from 'react-native';
import  img from './assets/background.png';
import  circle from './assets/circle.png';

const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;

export default Home = ({navigation}) =>{
  return (
    <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center',}}>
       <Image 
         source={circle}  
          style={{width: 160, 
                height: 160,
                marginBottom: 80,              
          }} 
        />
      
      </View>

      <View>  
        <Text style ={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style ={styles.title}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.fixToText} >
      <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100, borderColor: 'white', borderWidth: 4, backgroundColor: 'blue', marginTop: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => { 
                navigation.navigate('Login');
            }}>
                    <Text style={{fontSize: 20, color: 'white'}}> LOGIN</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100, borderColor: 'white', borderWidth: 4, backgroundColor: 'gray', marginVertical: 0.03*WinHeight, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20}}> SIGN UP</Text>
            </TouchableOpacity>
      </View>
      
      <Text style ={styles.title}>HOW WE WORK?</Text>

      
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    justifyContent: 'center',
    marginHorizontal: 20,

  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 20,
  },

  button: {
    width: 150, 
    height: 60, 
    
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },


 
});
