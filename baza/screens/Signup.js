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

} from 'react-native';

class SignupScreen extends Component {

    render() {
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
                        returnKeyType="next"
                        placeholder="username "

                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />


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

                    <Button
                        title="Login"
                        onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        }
                    />
                </View>

            </KeyboardAvoidingView>

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

    button: {
        backgroundColor: "steelblue"
    }

})

export default SignupScreen;