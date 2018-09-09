import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createStackNavigator } from 'react-navigation';
import Login from './app/component/Login';
import Profile from './app/component/Profile';
const AppNav = createStackNavigator({
Login: { screen: Login },
Profile: { screen: Profile },
});
export default AppNav;
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
