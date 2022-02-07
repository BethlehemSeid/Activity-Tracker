import Stats from "../Screens/Stats";
import { createStackNavigator } from "react-navigation-stack";
import { defineAnimation } from "react-native-reanimated";
import Header from "../Shared/Header";
import React from "react";

const screens = {
    Stats: {
        screen: Stats,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header title = 'Stats Info' navigation ={navigation} />
            }
        }
    }
}

const StatsStack = createStackNavigator(screens);

export default StatsStack;