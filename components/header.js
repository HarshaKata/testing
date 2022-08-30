import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default function Header() {
  
  
  return (
    <View style={styles.header}>
        <Text style={styles.text1}>My Todo</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor:'coral',
      
      paddingTop: 28,
      height: 80,
  },
  text1: {
      textAlign: 'center',    
      fontSize: 36,
  }
  
});
