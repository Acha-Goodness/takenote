import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "../assets/logo.png";
import { router } from 'expo-router';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Landing = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const value = await AsyncStorage.getItem("session");
        if (value !== null) {
          router.push("/notes")
        }
      } catch (e) {
        console.log('Failed to fetch data', e);
      }
    };

    fetchUser();
  }, []);

  const start = () => {
    router.push("/login");
  }

  return (
    <View style={styles.container}>
        <View style={{marginBottom: "30%"}}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.appname}>Nice Note</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={start}>
            <Text style={styles.btnText}>start</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Landing;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#000000"
    },
    appname: {
        alignSelf:"center",
        color: "#ffffffff",
        fontSize:30,
        fontWeight: 900
    },
    btn:{
        backgroundColor:"#000000",
        paddingHorizontal:"20%",
        paddingVertical:"2%",
        borderColor:"#2ec6dd",
        borderWidth:2,
        borderRadius:10
    },
    btnText: {
        color:"#ffffff",
        fontSize:20,
    }
})