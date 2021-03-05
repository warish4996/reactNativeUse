import React from "react";
import { Text, StyleSheet,View } from "react-native";

const ComponentScreen = () => {
    const name = 'Warish'
  return(
  <View>
    <Text style={styles.text}>This is component screen</Text>
    <Text style={styles.name}>my name is {name}</Text>
  </View> )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  name:{
      fontSize:20
  }
});

export default ComponentScreen;