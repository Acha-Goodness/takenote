import { StyleSheet, Text, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonForm from '../../components/common/form';
import { loginFormControls } from '../../config';
import { useState } from 'react';
import { Link } from 'expo-router';
import supabase from '../../config/supabaseClient';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    email : "",
    password : "",
}

const Login = () => {
const [ formData, setFormData ] = useState(initialState);
const [ isLoading, setIsLoading ] = useState(false);
const [ formError, setFormError ] = useState(null)

const signIn = async () => {
   if(!formData.email || !formData.password){
      setFormError("Please Fill in all fields")
      return;
   }

    setIsLoading (true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
   
    if (error) {
      Alert.alert(error.message)
      setIsLoading (false)
      return;
    }
    
    if (data) {
      await AsyncStorage.setItem("access_token", JSON.stringify(data.session.access_token));
      Alert.alert('Login successfull')
      router.push("/notes");
    } 
    setIsLoading (false)
}

  return (
    <SafeAreaView style={styles.loginWrap}>
      <Text style={{color: "#2ec6dd", textAlign:"center", fontSize:20, fontWeight:700, marginBottom:"5%"}}>Sign In</Text>
      <CommonForm
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
          onSubmit={signIn}
      />
      <View style={{flexDirection:"row", marginTop:"4%", justifyContent:"space-between", alignItems:"center", paddingHorizontal:"2%"}}>
         <Text style={{color:"#ffffff"}}>You don't have an account?</Text>
         <Link href="/register">
          <Text style={{color:"#ffffff", fontWeight:600, fontSize:16}}>Sign Up</Text>
         </Link>
      </View>
      <Text style={{color:"red", marginTop:10, marginLeft:10}}>{formError}</Text>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
loginWrap: {
    flex: 1,
    backgroundColor: "#000000ff",
    paddingHorizontal:"20%",
    justifyContent:"center"
  },
})