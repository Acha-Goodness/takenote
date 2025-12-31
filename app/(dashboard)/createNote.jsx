import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateNote = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>createNote</Text>
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