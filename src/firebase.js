import firebase from 'react-native-firebase';

let firebaseConfig = {
  apiKey: 'AIzaSyCutbw2d6g3x1HaRr9JqH9mTREg-jrr790',
  authDomain: 'localizacao-ed7ca.firebaseapp.com',
  databaseURL: 'https://localizacao-ed7ca.firebaseio.com',
  projectId: 'localizacao-ed7ca',
  storageBucket: 'localizacao-ed7ca.appspot.com',
  messagingSenderId: '178375330703',
  appId: '1:178375330703:web:6afa0c47f913b3898559fa',
  measurementId: 'G-B90Q0HTNBE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
