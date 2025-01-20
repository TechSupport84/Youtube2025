import { View, Text, StyleSheet, StatusBar  ,Image, ScrollView} from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import ProductList from '../components/ProductList'
const HomagePage = () => {
  return (
    <View style = {styles.container}>
      <StatusBar barStyle={"light-content"} />
      <NavBar/>
      <ScrollView>
      <ProductList />
        </ScrollView>
    </View>
  )
}

export default HomagePage
const styles  =  StyleSheet.create({
  container:{
     flex:1,
  }
})
  