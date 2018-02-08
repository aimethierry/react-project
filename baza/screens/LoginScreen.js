import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button,
    ActivityIndicator
    
} from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput } from 'react-native-elements';




class LoginScreen extends Component {
  constructor(props){
      super(props);
      this.state = {email:" ", password:"",erroor:"",loading:false}

      }

      onPressLogin() {
          this.setState({ error:" ", loading:true});
          
          const{ email, password} = this.state;
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
              this.setState({ error:"", loading:false});
              this.props.navigation.navigate("HomeScreen")
          })
          .catch(() => {
              this.setState({error:"Authentication Failed", loading:false});
          })
      }

    onSignUpPress() {
        this.setState({ error: "", loading: true });

        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: "", loading: false });
                this.props.navigation.navigate("HomeScreen")
            })
            .catch(() => {
                this.setState({ error: "Authentication Failed", loading: false });
            })
       }


       renderButtonOrLoading() {
           if(this.state.loading){
               return <Text>Loading</Text>
           }

           return <View>
               <Button onPress={this.onPressLogin.bind(this)} title="login" />
               <Button onPress={this.onSignUpPress.bind(this)} title="signup"/>
               </View>
       } 

       render() {
           return(
               <View>
                   <FormLabel>Email</FormLabel>
                   <FormInput onChangeText={email => this.setState({ email })} />
                   <FormLabel>Password</FormLabel>
                   <FormInput onChangeText={password => this.setState({ password })} />
                    {this.renderButtonOrLoading() }
                   </View>
           ) 

       }
    }

    
     
    





    
   
    

const styles = StyleSheet.create({

    button: {
        backgroundColor: "#2980b9",
        marginTop: 20,
        paddingLeft: 150,
        height: 30,
        paddingTop: 6,
        borderRadius: 10,


    },
    container: {
        flex: 1,
        backgroundColor: "teal"
    },

    logotitle: {
        paddingTop: 80,

        color: "darkorange",
        width: 160,
        height: 100,
        textAlign: 'center',
        opacity: 0.5,
    },

    containerform: {
        padding: 20,


    },

    logo: {
        height: 100,
        width: 100,
        marginTop: 10,
        alignItems: "center",
        paddingLeft: 400,
        backgroundColor: "darkorange",

    },

    input: {
        height: 50,
        backgroundColor: "rgba(255,255,255,0.3)",
        marginBottom: 20,
        color: "white",
        paddingHorizontal: 10,
        borderRadius: 15,

    },

    button:{
        backgroundColor:"steelblue"
    }

})

export default LoginScreen;















// ender() {
//     return (
//         <View behavior="padding" style={styles.container}>
//             <View>
//                 <View style={styles.containerlogo}>
//                     {/* <Image style={styles.logo}  source={require('./bird.jpg')} /> */}
//                     <Text style={styles.logotitle}>Saneza</Text>
//                 </View>

//                 <View style={styles.containerform}>
//                     <TextInput
//                         underlineColorAndroid='transparent'
//                         returnKeyType="next"
//                         placeholder="Enter Your Email "

//                         placeholderTextColor="rgba(255,255,255,0.3)"
//                         style={styles.input}


//                     />

//                     <TextInput
//                         underlineColorAndroid='transparent'
//                         placeholder="Enter Your Password"
//                         returnKeyType="go"
//                         secureTextEntry
//                         placeholderTextColor="rgba(255,255,255,0.3)"
//                         style={styles.input}


//                     />

//                     <Button
//                         title="Login"
//                         onPress={() =>
//                             this.onPressSignIn()
//                         }
//                     />
//                 </View>
//             </View>
//         </View>

//     )
// }
// }


// apiKey: "AIzaSyDzR9y2bW7dLSrLemrEo_daSq2g7ZlIQbg",
//   authDomain: "saneza-454c0.firebaseapp.com",
//     databaseURL: "https://saneza-454c0.firebaseio.com",
//       projectId: "saneza-454c0",
//         storageBucket: "saneza-454c0.appspot.com",
//           messagingSenderId: "780998865468"
