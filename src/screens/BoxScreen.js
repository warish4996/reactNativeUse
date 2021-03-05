import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, } from "react-native";

const BoxScreen = () => {

    return (
        <View style={styles.main}>
            <Text style={styles.text1}>box 1</Text>
            <Text style={styles.text2}>box 2</Text>
            <Text style={styles.text3}>box 3</Text>
        </View>)
};

const styles = StyleSheet.create({
    main: {
        borderWidth: 3,
        borderColor: 'black',
        height:200,
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:"flex-start"
    },
    text1: {
        borderWidth: 3,
        borderColor: 'blue',
    },
    text2: {
        borderWidth: 3,
        borderColor: 'blue',
        top:30
    },
    text3: {
        borderWidth: 3,
        borderColor: 'blue',
    }

});

export default BoxScreen;