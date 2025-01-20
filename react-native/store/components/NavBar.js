import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import SearchBarComponent from './SearchBarComponent'
import CartComponet from './CartComponet'

export default function NavBar() {
  return (
    <View style ={styles.container}>
      <Text style ={styles.headText}>Store App</Text>
      <CartComponet title={"View your carts "} color={"#ddd"}/>
       <StatusBar barStyle={"light-content"} backgroundColor={"#000"}  />
       <View> 
        <SearchBarComponent  placeholder={"Search Product "}/>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    
        backgroundColor:"#000",
        color:"#DDD"
    },
    headText:{
        color:"#ddd",
        padding:20,
        margin:20,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:20,
        
    }
    
})