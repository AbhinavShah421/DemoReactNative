import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    header:null
   };
   render() {
     const { navigate } = this.props.navigation;
     return (
       // <Button
       //   title="Go to Jane's profile"
       //   onPress={() =>
       //     navigate('Profile', { name: 'Jane' })
       //   }
       // />
       <View style={styles.container}>
            <ImageBackground source={require('../images/background.jpg')} style={styles.backgroundImage}>
             <View style={styles.content}>
                 <Text style={styles.logo}>-IWORK-</Text>

                 <View style={styles.inputContainer}>
                   <TextInput underlineColorAndroid= 'transparent' style={styles.input} onChangeText={(username)=>this.setState({username})} value={this.state.username} placeholder='username' >
                   </TextInput>
                   <TextInput secureTextEntry={true} underlineColorAndroid= 'transparent' style={styles.input} onChangeText={(password)=>this.setState({password})} value={this.state.password} placeholder='password' >
                   </TextInput>
                   <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>LOGIN</Text>
                   </TouchableOpacity>
                 </View>
                 <Text value={this.state.resJson}></Text>
             </View>
            </ImageBackground>
       </View>
     );
   }
    constructor(props){
      super(props);
      this.state={username:'',password:'',resJson:''};
    }
    login=()=>{

      // posting data to login api.................
      fetch('https://abhinavkumar1136.000webhostapp.com/User_Registration.php',{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
        body:JSON.stringify({
          email:this.state.username,
          password:this.state.password,
        })
      })
      .then((response)=>response.json())
      .then((res)=>{

        this.state.resJson=res;

        if(res!=""){
         var username=res.fname+" "+res.lname;
         // alert(username);
          AsyncStorage.setItem('user',username);
          AsyncStorage.setItem('userdata',res);
          // this.props.navigator.push({
          //   id:'profile'
          // });
          this.props.navigation.navigate('Profile')
         }else{
          alert(JSON.stringify(res));
        }
        // alert(JSON.stringify(res));
      })
      .done();
    }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  },
 backgroundImage:{
   flex:1,
   alignSelf:'stretch',
   width:null,
   justifyContent:'center',
 },
 content:{
   alignItems:'center',

 },
 logo:{
   color:'white',
   fontSize:40,
   fontStyle:'italic',
   fontWeight:'bold',
   //textShadowColor:'#252525',
   // textShadowOffset:{ width:2,height:2},
   // textShadoowRadius:15,
   marginBottom:20,
 },
 inputContainer:{
   // color:'white',
   // fontSize:40,
   // fontStyle:'italic',
   // fontWeight:'bold',
   //textShadowColor:'#252525',
   // textShadowOffset:{ width:2,height:2},
   // textShadoowRadius:15,
   marginBottom:0,
   margin:20,
   padding:20,
   paddingBottom:10,
   alignSelf:'stretch',
   borderWidth:1,
   borderColor:'#fff',
   backgroundColor:'rgba(255,255,255,0.2)',
 },
 input:{
   fontSize:16,
   height:40,
   padding:10,
   //paddingBottom:20,
   marginBottom:10,
   backgroundColor:'rgba(255,255,255,0.3)',
 },
 buttonContainer:{
   alignSelf:'stretch',
   margin:20,
   padding:20,
   backgroundColor:'blue',
   borderWidth:1,
   borderColor:'#fff',
   backgroundColor:'rgba(255,255,255,0.6)',
 },
 buttonText:{
   fontSize:16,
   fontWeight:'bold',
   textAlign:'center',
 }
});
export default Login;
// export { default as Toolbar } from './Toolbar';
