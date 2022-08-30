import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({item,pressHandler}) {
  
  
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style={styles.item}>
            <MaterialIcons name="delete" size={18} color="black" /> 
            <Text style={styles.text1}>{item.text}</Text>
        </View>
        
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  item: {
      padding: 16,
      margin: 16,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      borderStyle: "dashed",
      flexDirection: "row",
  },
  text1: {
    marginLeft: 10,
  }
});
