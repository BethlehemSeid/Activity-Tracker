import Timer from "../Components/Timer";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../Shared/Header";
import React from "react";
const screens = {
    Timer: {
        screen: Timer,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header title = 'Timer Setup' navigation ={navigation} />
            }
        }
    }
}

const TimerStack = createStackNavigator(screens);

export default TimerStack;