import React from "react";
import { Text, StyleSheet,View,Image } from "react-native";

const ImageDetail = (props) => {
const {imageSource,title,imageScore}=props
  return(
  <View>
    <Image source={imageSource}/>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>Image Score - {imageScore}</Text>
  </View> )
};

const styles = StyleSheet.create({
  text: {},
});

export default ImageDetail;