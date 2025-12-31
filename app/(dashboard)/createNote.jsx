import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createFormControls } from '../../config';
import CommonForm from '../../components/common/form';
import supabase from '../../config/supabaseClient';
import { router } from 'expo-router';

const initialState = {
    title : "",
    content : "",
}

const CreateNote = () => {
  const [ formData, setFormData ] = useState(initialState);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ formError, setFormError ] = useState(null)

  const createNote = async () => {
    const title = formData.title
    const content = formData.content

    if(!title || !content ){
      setFormError("Please Fill in all fields")
      return;
    }

    setIsLoading(true)

    const { data, error } = await supabase
    .from("notes")
    .insert([{ title, content }])

    if(error){
      console.log(error)
      setFormError(error)
      setIsLoading(false)
    }

    console.log(data);
    setIsLoading(false)
    setFormError(null)
    setFormData(initialState)
    setIsLoading(false)
    router.push("/notes");
    
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"#2ec6dd", alignSelf:"center", fontWeight:"900", fontSize:20, marginBottom:"4%" }}>Create Note</Text>

      <CommonForm
        formControls={createFormControls}
        buttonText={"Create Note"}
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
        onSubmit={createNote}
      />

      {formError && <Text style={{color:"#df2627", marginTop:"2%"}}>{formError}</Text>}
    </SafeAreaView>
  )
}

export default CreateNote;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#000000"
  },
})