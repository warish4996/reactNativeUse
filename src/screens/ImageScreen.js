import React from "react";
import { Text, StyleSheet,View } from "react-native";
import ImageDetail from "../Components/ImageDetail"

const ImageScreen = () => {
  return(
  <View>
    <Text style={styles.text}>Image screen</Text>
    <ImageDetail title='Forest' 
    imageSource={require('../../assets/forest.jpg')}
    imageScore = '9'/>
    <ImageDetail title='Mountain' 
    imageSource={require('../../assets/mountain.jpg')}
    imageScore = '8'/>
    <ImageDetail title='Beach' 
    imageSource={require('../../assets/beach.jpg')}
    imageScore = '7'/>
  </View> )
};

const styles = StyleSheet.create({
  text: {},
});

export default ImageScreen;