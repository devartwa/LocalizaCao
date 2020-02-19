import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
}
