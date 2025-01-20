import { View, Text ,Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Product } from '../constant/ProductImages'
import CartComponet from './CartComponet'
const ProductList = () => {


  return (
    <View>
      <Text>ProductList </Text>

        <View style ={styles.container}>
            {Product.map((product, index)=>(
                <View key={index} style={styles.containerProduct}> 
                    <Text style ={styles.title}> {product.title}</Text>
                    <TouchableOpacity>
                    <Image source={product.image} style={styles.Images} />
                    
                    </TouchableOpacity>
                    <Text style={styles.description}>{product.description}</Text>
                    <View style = {styles.itemPrices}>
                    <Text > ${product.price}</Text>
                        <CartComponet color={"#000"}/>
                        
                     </View>
                </View>
            ))}
        </View>
    </View>
  )
}

export default ProductList
const styles  = StyleSheet.create({
    Images:{
        width:350,
        height:350,
        resizeMode:'contain',
    },
    containerProduct:{
   
        backgroundColor:"#fff",
        shadowColor:"#000",
        shadowOpacity:2,
        shadowOffset:{width:0, height:4},
        margin:10,
        opacity:4,
        borderRadius:10,
    },
    container:{
        alignItems:'center',
    },
    title:{
        padding:5,
        fontWeight:"bold",
        fontSize:20,
    },
    itemPrices:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
    },
    description:{
        fontWeight:'300',
        fontSize:18,
        margin:10,
    }
})