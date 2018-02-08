import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import { TabNavigator } from 'react-navigation';


export default class HelloWorldApp extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.containerlogo}>
                    {/* <Image style={styles.logo}  source={require('./bird.jpg')} /> */}
                    <Text style={styles.logotitle}>Saneza</Text>
                </View>

                <View style={styles.containerform}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        returnKeyType="next"
                        placeholder="username "

                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />

                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder="password"
                        returnKeyType="go"
                        secureTextEntry
                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );
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

    }

})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);




import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


export default class Appp extends Component {
    render() {
        return (
            <AppNavigator />
        )
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen }
})

AppRegistry.registerComponent('AwesomeProject', () => App);






import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Button, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import LocalImage from './LocalImage';


const
class HomeScreen extends Component {
    render() {
        return (
            <ScrollView>
          <View>
            <LocalImage 
            source={require('./titi.jpg')}
            originalWidth={2000}
            originalHeight={1200}
            />
            </View>

            <TouchableOpacity onPress={this._onPressButton}>
               <View style={styles.button}>
                  <Text style={styles.buttonText}>Subscribe</Text>
               </View>
            </TouchableOpacity>


            <View>
                    <Text style={styles.browse}>Browse  ></Text>
                    <Text style={styles.browseText}>This is all compony we workd with you can check its free </Text>
                </View>


               
            
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"teal"
    },

    buttonText:{
        fontSize:17,
        fontWeight:"900",
        fontWeight: "bold",
        color:"white",
        margin:20,
    }, 

    browse : {
        fontSize: 23,
        color:"black",
        margin:10
    },

    browseText: {
        fontSize: 15,
        marginTop: -13,
        paddingLeft:10,
       
    }
})

export default HomeScreen;

