import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import Map from "./Map";
import AddCar from "./AddCar";
//import MonParking from "./MonParking";
//import MyCars from "./MyCars";
//import Places from "./Places";
//import Places2 from "./Places2";
//import MonParking2 from "./MonParking2";
const Stack = createNativeStackNavigator();

class MapNavigation extends Component{
    render(){
        return(
            <Stack.Navigator 
                initialRouteName="Map"
            >
                <Stack.Screen 
                    component={ AddCar } 
                    name="AddCar" 
                    options={{
                        headerShown:false
                    }}
                />

                <Stack.Screen 
                    component={ Map } 
                    name="Map" 
                    options={{
                        headerShown:false
                    }}
                />
                
                
            </Stack.Navigator>
        );
    }

}


export default MapNavigation;