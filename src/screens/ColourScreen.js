import React,{useState} from "react";
import { Text, StyleSheet,View,Button,FlatList } from "react-native";

const HomeScreen = () => {
    const [color, setColor] = useState([]);
    
  return <View>
    <Button
    title = 'Add a color'
    onPress = {()=>setColor([...color,randomRgb()])}
    />
    <FlatList 
    keyExtractor ={color => color}
    data={color}  
    renderItem={({item})=>{
      return <View style={{height:100,width:100,backgroundColor:item}}></View>
    }}/>
    
    </View>
};

const randomRgb=()=>{
const red = Math.floor(Math.random() * 256)
const green = Math.floor(Math.random() * 256)
const blue = Math.floor(Math.random() * 256)
return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({
  text: { }
});

export default HomeScreen;