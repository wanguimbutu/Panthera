import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
//import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    
    <View style={styles.container}> 
      
      <Login/>
    </View> 
  
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