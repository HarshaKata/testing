import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function AddTodo({submitHandler}) {
  const[text,setText]=useState('');
  const addText=(val)=>{
    setText(val);
  }
  
  return (
    <View>
        <TextInput
            placeholder='AddTodo.....'
            onChangeText={addText} 
        />

        <Button title='Add Todo' color='coral' onPress={()=>submitHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
    
});
