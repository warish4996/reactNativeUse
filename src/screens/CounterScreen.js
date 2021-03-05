import React,{useState,useReducer} from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const reducer =(state,action)=>{
switch(action.type) {
  case 'DECRESE':
    return {...state,counter:state.counter - 1}
  case 'INCREASE':
    return {...state,counter:state.counter + 1}  
  default:
    return state  
}
}

const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{counter:0}) 
    
  return(
  <View>
    <Button title='Decrese' onPress={()=>dispatch({type:'DECRESE'})}/>
    <Button title='Increase' onPress={()=>dispatch({type:'INCREASE'})}/>
    <Text style={styles.text}>Current Count: {state.counter}</Text>
  </View> )
};

const styles = StyleSheet.create({
  text: {},
});

export default CounterScreen;