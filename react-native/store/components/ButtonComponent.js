import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtonComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text  style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles  =  StyleSheet.create({
 btn:{
     backgroundColor:"blue",
     padding:20,
     margin:20,
     borderRadius:10,
     marginBottom:0,
 },
 text:{
    fontSize:18,
    fontWeight:"bold",
    color:'#ddd',
    textAlign:"center"
 }
})