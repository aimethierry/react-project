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

class DashboardScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('./bird.jpg')} style={{ width: 78, height: 34 }} />
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            {/* <Icon style={styles.navItem} name="search" size={25}/> */}
                        </TouchableOpacity>

                        <TouchableOpacity>
                            {/* <Icon style={styles.navItem} name="account-circle" size={25}/> */}
                        </TouchableOpacity>
                    </View>
                </View>
                
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.containerlogo}>
                    {/* <Image style={styles.logo}  source={require('./bird.jpg')} /> */}
                    <Text style={styles.logotitle}>Saneza</Text>
                </View>

                <View style={styles.containerform}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        returnKeyType="next"
                        placeholder="First Name "

                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />


                    <TextInput
                        underlineColorAndroid='transparent'
                        returnKeyType="next"
                        placeholder="Second Name  "

                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />


                    <TextInput
                        underlineColorAndroid='transparent'
                        returnKeyType="next"
                        placeholder="Email "

                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />

                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder="Account Number"
                        returnKeyType="go"
                        placeholderTextColor="rgba(255,255,255,0.3)"
                        style={styles.input}
                    />

                    <Button
                       style={{borderRadius:30}}
                        title="Subscribe"
                        onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        }
                    />
                </View>

            </KeyboardAvoidingView>

                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}
                        onPress={() =>
                            navigate('HomeScreen', { name: 'HomeScreen' })
                        }
                    >
                        {/* <Icon name="home" size={25}/> */}
                        <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tabItem}
                        onPress={() =>
                            navigate('DashboardScreen', { name: 'DashboardScreen' })
                        }
                    >
                        <Text style={styles.tabTitle}>Subscription</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.tabItem}
                        onPress={() =>
                            navigate('DashboardScreen', { name: 'DashboardScreen' })
                        }
                    >
                        <Text style={styles.tabTitle}>Image</Text>
                    </TouchableOpacity>




                    <TouchableOpacity style={styles.tabItem}
                        onPress={() =>
                            navigate('BookScreen', { name: 'DashboardScreen' })
                        }
                    >
                        {/* <Icon name="home" size={25}/> */}
                        <Text style={styles.tabTitle}>Serives</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({



    navBar: {
        height: 55,
        backgroundColor: "white",
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rightNav: {
        flexDirection: "row"
    },

    navItem: {
        marginLeft: 20,
    },

    body: {
        flex: 1,
    },

    tabBar: {
        backgroundColor: "white",
        height: 60,
        borderTopWidth: 0.5,
        borderColor: "#E5E5E5",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tabItem: {
        alignItems: "center",
        justifyContent: "center",

    },
    tabTitle: {
        fontSize: 11,
        color: "#3c3c3c",
        paddingRight: 10,
    },

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

export default DashboardScreen;