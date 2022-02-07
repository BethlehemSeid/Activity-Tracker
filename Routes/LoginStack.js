import Login from '../Screens/Login';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
    Login: {
        screen: Login,
    }
}

const LoginStack = createStackNavigator(screens);

export default LoginStack;