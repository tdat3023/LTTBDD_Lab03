import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef  } from "react";
import { StyleSheet, 
        Text, 
        View , 
        Button, 
        ImageBackground,
        Image,
        SafeAreaView} from 'react-native';
import  circle from './assets/circle.png';


export default Login = function(){
  
  
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
