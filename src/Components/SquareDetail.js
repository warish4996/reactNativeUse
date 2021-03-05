import React,{useState} from "react";
import { Text, StyleSheet,View,Button,FlatList } from "react-native";

const SqureDetail = (props) => { 
    const {title} = props
  return <View>
         <Text>{title}</Text>
         <Button title={`More ${title}`} onPress={()=>props.colorChange(title,"more")}/>
         <Button title={`Less ${title}`} onPress={()=>props.colorChange(title,"less")}/>
    </View>
};

const styles = StyleSheet.create({
  text: { }
});

export default SqureDetail;