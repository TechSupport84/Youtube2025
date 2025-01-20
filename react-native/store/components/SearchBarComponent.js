import { View, Text, TextInput  ,StyleSheet} from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBarComponent = ({placeholder , value, onChangeText}) => {
  return (
    <View style={styles.container}>
    <View style ={styles.Bar}>
     <EvilIcons name="search" size={34} color="black" />
      < TextInput  style ={styles.input}placeholder={placeholder}  value={value}  onChangeText={onChangeText}/>
    </View>
    </View>
  )
}

export default SearchBarComponent

const styles = StyleSheet.create({
    container:{
 

    },
    Bar:{
        flexDirection:"row",
        backgroundColor:"#ddd",
        opacity:1,
        padding:10,
        borderRadius:10,
        alignItems:"center",
        margin:10,
    },
    input:{
        fontSize:18,
    }
})