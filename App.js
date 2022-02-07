import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './Routes/Drawer';
// import LoginStack from './Routes/LoginStack';
import Timer from './Components/Timer';
export default function App() {

  return (
      <Navigation />
      // <Timer />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#000', 
  },
});
