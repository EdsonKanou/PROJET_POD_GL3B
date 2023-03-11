import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import Accueil from "./Accueil";
import CreerUnCompte from "./CreerUnCompte";
import Autorisation from "./Autorisation";
import Connexion from "./Connexion";
//import AddCar from "../client/AddCar";
//import ReservationOne from "../client/ReservationOne";
//import AfficherClient from "../administrateur/AfficherClient";
import ClientNavigation from "../client/ClientNavigation";
const Stack = createNativeStackNavigator();

class VisiteurNavigation extends Component{
    render(){
        return(
            <Stack.Navigator 
                initialRouteName="Accueil"
            >
                <Stack.Screen 
                    component={ Accueil } 
                    name="Accueil" 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    component={ CreerUnCompte } 
                    name="CreerUnCompte"
                    options={{
                        title: "Creation de compte"
                    }}
                />
                <Stack.Screen 
                    component={ Autorisation } 
                    name="Autorisation"
                    options={{
                        title: "Autorisation"
                    }}
                />
                <Stack.Screen 
                    component={ Connexion } 
                    name="Connexion"
                    options={{
                        title: "Connexion",
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    component={ ClientNavigation } 
                    name="ClientNavigation"
                    options={{
                        title: "ClientNavigation",
                        headerShown:false
                    }}
                />
                
            </Stack.Navigator>
        );
    }

}


export default VisiteurNavigation;