
import React, { Component } from 'react';
import { AppRegistry, View, Text, StatusBar, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';

import LocalImage from './LocalImage';
import DashboardScreen from './DashboardScreen';



export default class HomeScreen extends Component {
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

                <ScrollView style={styles.body}>

                    <View>
                        <LocalImage
                            source={require('./3.jpg')}
                            originalWidth={2000}
                            originalHeight={1200}
                        />
                    </View>

                    <View style={{ width: 100, marginTop: 10, marginBottom: 10, marginLeft: 300 }}>
                        <Button style={styles.buttonView} title="send" onPress={() =>
                            navigate('LoginScreen', { name: 'Jane' })
                        } />
                    </View>

                    <View>
                        <LocalImage
                            source={require('./3.jpg')}
                            originalWidth={2000}
                            originalHeight={1200}
                        />
                    </View>

                    <View style={{ width: 100, marginTop: 10, marginBottom: 10, marginLeft: 300 }}>
                        <Button style={styles.buttonView} title="View" onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        } />
                    </View>

                    <View>
                        <LocalImage
                            source={require('./3.jpg')}
                            originalWidth={2000}
                            originalHeight={1200}
                        />
                    </View>

                    <View style={{ width: 100, marginTop: 10, marginBottom: 10, marginLeft: 300 }}>
                        <Button style={styles.buttonView} title="View" onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        } />
                    </View>


                    <View>
                        <LocalImage
                            source={require('./3.jpg')}
                            originalWidth={2000}
                            originalHeight={1200}
                        />
                    </View>

                    <View style={{ width: 100, marginTop: 10, marginBottom: 10, marginLeft: 300 }}>
                        <Button style={styles.buttonView} title="View" onPress={() =>
                            this.props.navigation.navigate('HomeScreen')
                        } />
                    </View>



                </ScrollView>

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


// const App = StackNavigator({
//   DashboardScreen: { screen: DashboardScreen },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

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
        paddingRight:10,
    }

})
