import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
      <SafeAreaView style={styles.container}>
      <Text>profile</Text>
    </SafeAreaView>
  )
}

export default Profile;

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#000000"
    },
})