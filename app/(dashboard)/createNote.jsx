import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createFormControls } from '../../config';

const initialState = {
    title : "",
    content : "",
}

const CreateNote = () => {
  const [ formData, setFormData ] = useState(initialState);
  const [ isLoading, setIsLoading ] = useState(false)

  const createNote = async () => {
 
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"#ffffff"}}>createNote</Text>

      <CommonForm
        formControls={createFormControls}
        buttonText={"Create Note"}
        formData={formData}
        setFormData={setFormData}
        isLoading={isLoading}
        onSubmit={createNote}
      />
    </SafeAreaView>
  )
}

export default CreateNote;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#000000"
  },
})