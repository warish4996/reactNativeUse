import React,{useState} from "react";
import { Text,TextInput, StyleSheet,View, } from "react-native";

const HandlingText = () => {
const [password, setPassword] = useState('');
    
  return(
  <View>
      <Text>Enter password:</Text>
    <TextInput 
    style={styles.input}
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText={(value)=>setPassword(value)}
    value={password}/>
    <Text>My password is {password}</Text>
    {password.length < 5 && <Text style={styles.password}>Password must greater then 5 character!</Text>}
  </View> )
};

const styles = StyleSheet.create({
  input: {
      margin:15,
      fontSize:16,
      borderColor:'black',
      borderWidth:1

  },
  password: {
      color:'red'
  }
});

export default HandlingText;