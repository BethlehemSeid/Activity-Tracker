import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { StyleSheet, View } from 'react-native';
import ListStack from './ListStack';
import StatsStack from './StatsStack';
import TimerStack from './TimerStack';

const Screens = {
    List: {
        screen: ListStack
    },
    Stats: {
        screen: StatsStack
    },
}

const drawer = createDrawerNavigator(
    Screens,
    {
        contentOptions: {
            itemsContainerStyle: {
                activeTintColor: '#53115B',
                marginTop: 60,
            }
        }
    }
    );



export default createAppContainer(drawer);

