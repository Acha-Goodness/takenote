import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router'

const ViewNote = () => {
  const params = useLocalSearchParams();


  return (
    <SafeAreaView style={styles.container}>
        <Text style={{color:"#ffffff", fontSize:20, fontWeight:900, alignSelf:"center"}}>{params.title}</Text>

        <View style={{padding:"5%"}}>
            <Text style={{color:"#ffffff", marginTop:"4%"}}>{params.content}</Text>
        </View>
    </SafeAreaView>
  )
}

export default ViewNote

const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: "40%",
      backgroundColor:"#000000ff"
    },
})