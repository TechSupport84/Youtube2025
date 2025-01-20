import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import ButtonComponent from "./ButtonComponent";


const WelcomePage =({navigation})=>{
  

    return(
        <View style = {styles.container}>
            <View style = {styles.welcomPannel}>
                <Text style ={styles.title}>Welcome  EveryOne !</Text>
            </View>
             
             <View style={styles.button}>
             <ButtonComponent title={"Continue"} onPress={()=>navigation.navigate("home") }/>
             </View>
        </View>
    )
}

export default WelcomePage;

const styles =  StyleSheet.create({
container:{
    flex:1,

},
welcomPannel:{
   flex:1,
    padding:10, 
    justifyContent:"center",
    textAlign:"center",
   
},
title:{
    textAlign:"center",
    fontWeight:'bold',
    fontSize:20,
    padding:10,
    color:"#000"
},
button:{
 marginBottom:10,
 paddingBottom:10,
}

})
