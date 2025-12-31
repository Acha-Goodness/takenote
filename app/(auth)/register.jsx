import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CommonForm from '../../components/common/form';
import { registerFormControls } from '../../config';
import { useState } from 'react';
import { Link } from 'expo-router';

const initialState = {
    name: "",
    email : "",
    userName: "",
    password : "",
}

const Register = () => {
const [ formData, setFormData ] = useState(initialState);
const [ isLoading, setIsLoading ] = useState(false)

const onSubmit = () => {

}

  return (
    <SafeAreaView style={styles.registerWrap}>
      <Text 
        style={{color: "#2ec6dd", textAlign:"center", fontSize:20, fontWeight:700, marginBottom:"5%"}}>Sign Up</Text>
      <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          isLoading={isLoading}
          onSubmit={onSubmit}
      />
      <View style={{flexDirection:"row", marginTop:"4%", justifyContent:"space-between", alignItems:"center", paddingHorizontal:"2%"}}>
         <Text style={{color:"#ffffff"}}>You already have an account?</Text>
         <Link href="/login">
          <Text style={{color:"#ffffff", fontWeight:600, fontSize:16}}>Sign In</Text>
         </Link>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
registerWrap: {
    flex: 1,
    backgroundColor: "#000000ff",
    paddingHorizontal:"20%",
    justifyContent:"center"
  },
})