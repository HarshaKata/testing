import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {
  const [todos,todolist]=useState([
    {text:'linux from scratch', key:0},
    {text:'react native', key:1},
    {text:'IPL', key:2},
  ]);
  const pressHandler=(key)=>{
    todolist((prevtodo) => {
      return prevtodo.filter(todo=>todo.key!=key);
    });
  }
  const submitHandler=(text)=>{
    if(text.length>2){
      todolist((prevtodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevtodos
        ];
      })
    }
    else {
      Alert.alert('OOPS!','Text length should be greater than 3');
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list1}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>  
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list1: {
    marginTop: 20,
    flex: 1,
  },
  list2: {
    margin: 5,
    
  },
  
});
