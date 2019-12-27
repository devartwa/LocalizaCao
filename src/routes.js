import {createBottomTabNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

//Telas
import IntroScreen from './screens/IntroScreen';
import FeedScreen from './screens/FeedScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import InsertScreen from './screens/InsertScreen';
import HelpScreen from './screens/HelpScreen';
import SettingsScreen from './screens/SettingsScreen';
import FAQScreen from './screens/FAQScreen';
import AccountScreen from './screens/AccountScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';

const TabNavigator = createBottomTabNavigator({
    Anúncios: {
        screen: FeedScreen
    },
    Publicar: {
        screen: InsertScreen
    },
    Conta: {
        screen: AccountScreen
    },
    Configurações: {
        screen: SettingsScreen
    }
    }, {
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({tintColor}) => {
            const {routeName} = navigation.state;
            if (routeName === 'Anúncios') {
                return <Icon name='list' size={22} color={tintColor}/>
            } else if (routeName === 'Configurações'){
                return <Icon name='settings' size={22} color={tintColor}/>
            } else if (routeName === 'Publicar'){
                return <Icon name='camera' size={22} color={tintColor}/>
            } else if (routeName === 'Conta'){
                return <Icon name='user' size={22} color={tintColor}/>  
            }
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: '#002B77',
        activeBackgroundColor: '#FFF',
        inactiveBackgroundColor: '#FFF'
      },
});


const AppSwitchNavigator = createSwitchNavigator({
    IntroScreen,
    LoginScreen,
    TabScreen: TabNavigator,
    RegisterScreen,
    RecoveryScreen,
    HelpScreen,
    FAQScreen,
    AccountScreen,
    ChangePasswordScreen
})

export default createAppContainer(AppSwitchNavigator);