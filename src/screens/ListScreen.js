import React from "react";
import { Text, StyleSheet,View,FlatList } from "react-native";

const ListScreen = () => {
    const friend = [
        {name: 'friend#1',age:23},
        {name: 'friend#2',age:21},
        {name: 'friend#3',age:22},
        {name: 'friend#4',age:23},
        {name: 'friend#5',age:25},
        {name: 'friend#6',age:24},
        {name: 'friend#7',age:26},
        {name: 'friend#8',age:24},
        {name: 'friend#9',age:25},
    ]
  return(
    <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator={false}
    keyExtractor ={friend => friend.name}
    data={friend}  
    renderItem={({item})=>{
      return <Text style={styles.text}>Name:{item.name} - Age:{item.age}</Text>
    }}/>)
};

const styles = StyleSheet.create({
text:{
    marginVertical:50
}
});

export default ListScreen;