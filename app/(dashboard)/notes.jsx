import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import supabase from '../../config/supabaseClient';

const Notes = () => {
  const [ notes, setNotes ] = useState(null);
  const [ fetchError, setFetchError ] = useState(null);
 
  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
      .from("notes")
      .select()

      if(error){
        setFetchError("Could not fetch notes")
        setNotes(null)
        console.log(error)
      }

      if(data){
        setNotes(data)
        setFetchError(null)
      }
    }

    fetchNotes();
  }, [notes])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"#2ec6dd", alignSelf:"center", fontWeight:"900", fontSize:20 }}>Notes</Text>
      <View style={{marginTop:"2%"}}>
        {fetchError && (<Text>{fetchError}</Text>)}
        {notes && (
          <FlatList
            data={notes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{backgroundColor:"#6e6e6eff", padding:"3%",  borderRadius:5, marginTop:"3%"}}>
                  <Text style={{color: "#ffffff", fontSize:16, fontWeight:500}}>{item.title}</Text>
                  <Text style={{color: "#ffffff", marginTop:"2%"}}>{item.content}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ width: "3%" }} />}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Notes

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:"#000000ff"
    },
})