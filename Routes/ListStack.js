import List from "../Screens/List";
import Login from "../Screens/Login";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../Shared/Header";
import React from "react";
const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }
    },
    List: {
        screen: List,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header title = 'Activity List' navigation ={navigation} />,
                headerLeft: false
            }
            
        }
    }
}

const ListStack = createStackNavigator(screens);

export default ListStack;