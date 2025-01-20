import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const CartComponet = ({title, onPress, color}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
      <AntDesign name="shoppingcart" size={24} color={color} />
      </TouchableOpacity>
    
    </View>
  )
}

export default CartComponet

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        margin:10,
        padding:10,
        justifyContent:"space-between"
        
    },
    title:{
        color:"#fff",
        fontSize:16,
        fontWeight:'bold'
    },
    btn:{
        padding:10,
    }
})