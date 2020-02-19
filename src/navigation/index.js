import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomNav from './bottomNav';
import RegisterScreen from '../screens/RegisterScreen';
import RecoveryScreen from '../screens/RecoveryScreen';
import HelpScreen from '../screens/HelpScreen';
import FAQScreen from '../screens/FAQScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomNav}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="RecoveryScreen"
        component={RecoveryScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};
export default RootNavigation;
