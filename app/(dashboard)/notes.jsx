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
  }, [])

  if(notes) console.log(notes)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:"white"}}>notes</Text>
      <View>
        {fetchError && (<Text>{fetchError}</Text>)}
        {notes && (
          <FlatList
            data={notes}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{backgroundColor:"green"}}>
                  <Text style={{color: "#ffffff"}}>{item.title}</Text>
                  <Text style={{color: "#ffffff"}}>{item.content}</Text>
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
      backgroundColor:"#000000"
    },
})