import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createFormControls } from '../../config';
import CommonForm from '../../components/common/form';
import supabase from '../../config/supabaseClient';
import { router } from 'expo-router';
import { useLocalSearchParams } from 'expo-router'

const initialState = {
    title : "",
    content : "",
}

const CreateNote = () => {
  const [ formData, setFormData ] = useState(initialState);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ formError, setFormError ] = useState(null)

  const params = useLocalSearchParams();
  // console.log("PARAM: ", params)

  useEffect(() => {
    if (!params) return;

    setFormData({
      title: params.title ?? '',
      content: params.content ?? '',
    });
  }, []);

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
    .select()

    if(error){
      console.log(error)
      setFormError(error)
      setIsLoading(false)
    }

    if(data){
      console.log(data);
      setIsLoading(false)
      setFormError(null)
      setFormData(initialState)
      setIsLoading(false)
      router.push("/notes");
    }
  }

  const editNote = async () => {
    const { error } = await supabase
    .from('notes')
    .update({
      title: formData.title,
      content: formData.content,
    })
    .eq('id', params.id);

    if (!error) {
      router.back();
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"#2ec6dd", alignSelf:"center", fontWeight:"900", fontSize:20, marginBottom:"4%" }}>Create Note</Text>

      <CommonForm
        formControls={createFormControls}
        buttonText={!params ? "Create Note" : "Edit Note"}
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
        onSubmit={!params ? createNote : editNote}
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