import React,{useReducer} from "react";
import { Text, StyleSheet,View,Button,FlatList } from "react-native";
import SquareDetail from '../Components/SquareDetail'

const COLOR_CHANGE = 5

const reducer =(state,action)=>{
    let red =0,
    green = 0,
    blue = 0
    switch (action.type) {
        case 'red':   
            action.change == 'more' ? state.red + action.payload < 255 ? red=state.red + action.payload :alert('red is cannot more increase'): 
            state.red - action.payload < 0 ? alert('red is cannot more decrease') :red=state.red - action.payload
            return {...state,red}
        case 'green':
            action.change == 'more' ? state.green + action.payload < 255 ? green=state.green + action.payload:alert('green is cannot more increase'): 
            state.green - action.payload < 0 ? alert('green is cannot more decrease') :green=state.green - action.payload
            return {...state,green}
        case 'blue':
            action.change == 'more' ? state.blue + action.payload < 255 ? blue=state.blue + action.payload:alert('blue is cannot more increase'): 
            state.blue - action.payload  < 0 ? alert('blue is cannot more decrease') :blue=state.blue - action.payload
            return {...state,blue}
        default :
            return state
    }      
}
const SqureScreen = () => {
    const [state,dispatch] = useReducer(reducer,{red:0,green:55,blue:45})
    const colorArry =['red','green','blue']
    console.log(state)
  return <View>
 <FlatList
 keyExtractor={colorArry => colorArry}
 data={colorArry}
 renderItem={({item})=>{
     return <SquareDetail title={item} colorChange={(type,change)=>dispatch({type:type,change:change,payload:COLOR_CHANGE})}/>
 }}/>
 <View style={{height:150,width:150,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({
  text: { }
});

export default SqureScreen;