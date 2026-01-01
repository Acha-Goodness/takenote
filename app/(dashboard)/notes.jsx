import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import supabase from '../../config/supabaseClient';
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

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

  const viewNote = (note) => {
    router.push({
      pathname: '/viewNote',
      params: note
    })
  }

  const editNote = async (note) => {
    router.push({
      pathname: '/createNote',
      params: note
    })
  }

  const deleteNote = async (id) => {
    console.log("ID: ", id)
    const { data, error } = await supabase
    .from("notes")
    .delete()
    .eq("id", id)
    .select()
    
    console.log("Deleted Data: ", data)
  }

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
              <View style={{backgroundColor:"#6e6e6eff", padding:"3%",  borderRadius:5, marginTop:"3%", flexDirection:"row", justifyContent:"space-between", alignItems:"center "}}>
                <TouchableOpacity onPress={() => viewNote(item)}>
                  <View style={{width:"85%"}}>
                      <Text style={{color: "#ffffff", fontSize:16, fontWeight:500}}>{item.title}</Text>
                      <Text style={{color: "#ffffff", marginTop:"2%"}}>{item.content}</Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Pressable onPress={() => deleteNote(item.id)}>
                    <Entypo name="trash" size={20} color="#2596be" />
                  </Pressable>
                  <Pressable onPress={() => editNote(item)}>
                    <Entypo name="edit" size={20} color="#2596be" style={{marginTop:10}}/>
                  </Pressable>
                </View>
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