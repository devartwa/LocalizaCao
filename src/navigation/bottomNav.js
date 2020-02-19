import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import InsertScreen from '../screens/InsertScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Anuncios"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: '#002B77',
        activeBackgroundColor: '#FFF',
        inactiveBackgroundColor: '#FFF',
      }}>
      <Tab.Screen
        name="Anuncios"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="list" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Publicar"
        component={InsertScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="camera" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={22} color={color} />,
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
