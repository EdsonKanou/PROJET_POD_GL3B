import React, { Component } from "react";
import { View, Text,TextInput,StyleSheet,Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../couleur";



class MonCompte extends Component {
    render(){
        return(
            <View style={styles.container}>
                
                
                    <Pressable 
                        style={[ styles.champs, styles.compte ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="person-circle-outline"
                                    size={80}
                                    color="#fff"
                                    
                                />
                                <View style={styles.info}>
                        <Text style={{ fontWeight:"700",fontSize:17,color:Colors.white,textTransform: 'uppercase'}}> KANOU Edson</Text>
                        <Text style={{ fontWeight:"700",fontSize:10,color:Colors.white}}>edsonkanou55@gmail.com</Text>
                                 </View>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "MyCars" );
                        } }>
                            <Ionicons
                                    name="car-sport-outline"
                                    size={30}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> Suprimer</Text>
                    </Pressable>

                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "AddCar" );
                        } }>
                            <Ionicons
                                    name="medkit-outline"
                                    size={30}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> Modifier</Text>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "MonParking" );
                        } }>
                            <Ionicons
                                    name="gift"
                                    size={30}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}> deconnexion</Text>
                    </Pressable>
                    <Pressable 
                        style={[ styles.champs, styles.press ]}
                        onPress={ () => {
                        this.props.navigation.push( "Places" );
                        } }>
                            <Ionicons style={styles.icon}
                                    name="information"
                                    size={30}
                                    color='black'
                                    
                                />
                        <Text style={styles.text}>  A propos</Text>
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
        alignItems: "flex-start",
        justifyContent: "flex-start", 
        
      },
      text:{
        fontWeight:"100",
        fontSize:18,
        color:"#333"

      },
    
    champs:{
        width:"80%",
        height:70,
        borderRadius:0,
        borderColor:"#DDD",
        marginTop:2,
        paddingLeft:15,
        alignContent:"flex-start",
        flexDirection:"row",

        

    },
    press:{
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor:Colors.white,
        height:65, 
        marginTop: 3,
        borderRightWidth :2,
        borderBottomRighRadius:0,
        
    },
    compte:{
        width:"100%",
        height:"40%",
        backgroundColor:Colors.purple2,
        alignContent:"center",
        alignItems:"center",
        borderBottomRightRadius:125,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderBottomLeftRadius:0
    
    },
    info:{
        alignItems:"center",
        flexDirection:"column",
        padding:20,
        margin:5
        

    }
});

export default MonCompte;