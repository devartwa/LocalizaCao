/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics';

if (firebase.app().utils().isRunningInTestLab) {
  firebase.analytics().setAnalyticsCollectionEnabled(false);
}

AppRegistry.registerComponent(appName, () => App);
