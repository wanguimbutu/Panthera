import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";

export default function Login(){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Welcome back!</Text>
       

        <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder='Enter your email' placeholderTextColor='gray' onChangeText={(email)=>setEmail}/>
        </View>

        <View style={styles.inputView}>
            <TextInput style={styles.TextInput} placeholder='Enter your password' placeholderTextColor='gray' secureTextEntry={true} onChangeText={(password)=>setPassword(password)}/>
        </View>

        <TouchableOpacity>
            <Text style={styles.forget_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Loginbtn}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#C1B4B4',
        height:'100%',
        width:'100%',
    },
    title:{
        marginBottom:50,
        
    },

    inputView:{
        backgroundColor:'#fff',
        borderRadius:10,
        width:'80%',
        height:45,
        marginBottom:20,
        alignItems:'center',
    
        
    },
    TextInput: {
        height: 50,
        flex:1,
      
    
      },
      forget_button: {
        height: 20,
        marginBottom: 10,
        marginLeft:150,
        color:'gray',
        
      },
      Loginbtn: {
        width: "70%",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0C785E",
      },
})