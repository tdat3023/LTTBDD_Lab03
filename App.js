import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
//import NavigationContainer from 'react-navigation-container';
import RootComponent from './src/views/index';

const App: () => Node = () =>{
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <RootComponent/>
    
    
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

export default App;