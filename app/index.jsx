import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "../assets/logo.png";
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';


const Landing = () => {
  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: authListener } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
      })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

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