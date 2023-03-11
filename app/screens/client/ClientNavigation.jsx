import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import MonCompteNavigation from "./MonCompteNavigation";
import Map from "./Map";
import Ionicons from '@expo/vector-icons/Ionicons';
import MapNavigation from "./MapNavigation";
import Colors from "../../../couleur";

const tab= createBottomTabNavigator(); 

class ClientNavigation extends Component{
    render(){
        return(
            
                <tab.Navigator 
                    initialRouteName="MapNavigation"
                    screenOptions={{
                        tabBarStyle: {
                            backgroundColor:"white"
                        },
                        tabBarActiveTintColor: Colors.black
                    }}
                >
                    <tab.Screen 
                        component={MapNavigation} 
                        name="MapNavigation" 
                        options={{
                            headerShown:false,
                            title: "Map",
                            tabBarIcon: ( { focused, color, size } ) => (
                                <Ionicons
                                    color={ color }
                                    name="ios-map"
                                    size={ size } 
                                />
                            ) 
                        }}
                    />
                    <tab.Screen 
                        component={ MonCompteNavigation } 
                        name="MonCompteNavigation"
                        options={{
                            title: "Mon Compte",
                        
                                headerShown:false,
                        
                            tabBarIcon: ( { focused, color, size } ) => (
                                <Ionicons
                                    color={ color }
                                    name="person-circle-outline"
                                    size={ size } 
                                />
                            ) 
                        }}
                    /> 
                </tab.Navigator>
        );
        
    }

}


export default ClientNavigation;