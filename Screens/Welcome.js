import React from "react";
import { StyleSheet,Text,TouchableOpacity,Image, View } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';

const Welcome=()=>{
    const handleLoginPress=()=>{

};  
    const handleRegisterPress=()=>{

    };

    return(
        <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
                <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forget_button}>Continue as guest?</Text>
            </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:'#D1A2A2',
        height:'100%',
        width:'100%',
        
    },
   
   logo:{
    width: 200,
    height: 300,
    marginBottom:200,
   },
    button:{
        marginTop:10,
    backgroundColor: '#CCCCCC',
    marginVertical: 12,
    width:300,
    height:40
    },

    buttonText:{
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    
    },
    forget_button:{
        height:30,
        marginBottom:70
    }
});

export default Welcome;