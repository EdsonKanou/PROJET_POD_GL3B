import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable,Image,ScrollView,ImageBackground} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../couleur";


class Connexion extends Component{
    render(){
        return(
            <View style={styles.container}>
               <View style={styles.partie1}>
                
                  <ImageBackground source={require('../../../assets/politique.png')} 
                      style={styles.img}>

                    </ImageBackground>

               </View>
               <Text style={styles.text}>CONNEXION</Text>            
               <TextInput style={styles.champs} placeholder="Email"/>
               <TextInput style={styles.champs}  placeholder="Mot de passe" secureTextEntry={true}
                /*right={<TextInput.Icon name="eye-off-outline"/>}*/
                 />
                 <Text>Mot de passe oublier?</Text> 
                 <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "Autorisation" );
                        } }>
                        <Text style={{ fontWeight:"700",fontSize:15,color:Colors.white,textTransform: 'uppercase'}}> Connexion</Text>
                    </Pressable>   

                 

                   
            </View>       
        
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
        backgroundColor:Colors.white,
        alignItems: "center",
        justifyContent: "flex-start", 
        flexDirection:"column"
        
      },
      text:{
        fontWeight:"700",
        fontSize:20,
        color:"#333",
        marginTop:10

      },
      champs:{
        width:"90%",
        height:55,
        backgroundColor:"transparent",
        borderRadius:10,
        borderWidth:1,
        borderColor:"#DDD",
        marginTop:15,
        paddingLeft:15

    },
    partie1:{
        width:"100%",
        height:"42%",
        backgroundColor:Colors.purple2,
        alignContent:"center",
        alignItems:"center",
        borderRadius:40,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        justifyContent:"center"
        
    
    },
    press:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:Colors.purple2,
        height:60, 
        marginTop:30,
        borderRadius:50  
    },
    img:{
      width:"80%",
      height:"80%",
     marginTop:100
     
    }
});

export default Connexion;