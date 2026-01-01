import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const Profile = () => {

  const logout = async () => {
     await AsyncStorage.removeItem("access_token");
     router.push("/")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={logout}>
        <AntDesign name="poweroff" size={150} color="#f00e12"/>
      </Pressable>
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