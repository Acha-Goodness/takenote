import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Notes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>notes</Text>
    </SafeAreaView>
  )
}

export default Notes

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#000000"
    },
})