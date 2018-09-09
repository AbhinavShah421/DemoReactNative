import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

export default class Profile extends Component {
  static navigationOptions = {
     title: 'Welcome To Profile',
   };
   state ={
     user:[],
     userdata:[],
   }

constructor(){
  super();
    this._loadInitialState().done();
}

   _loadInitialState= async () =>{
     var value = await AsyncStorage.getItem('user');
     var res = await AsyncStorage.getItem('userdata');
     if(value!== null){
       this.setState({user :value});
       this.setState({userdata :res});
     }
   }
   render() {
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>

      <Text> -Welcome {this.state.user}- </Text>
      <Text> {this.state.userdata} </Text>
       </View>
     );
   }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }
});
