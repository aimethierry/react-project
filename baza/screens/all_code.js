import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LocalImage from './LocalImage';
import { Header } from 'react-native-elements';


class HomeScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: 'teal' }}
                        centerComponent={{ text: 'Saneza', style: { color: 'teal', fontSize: 25 } }}
                        rightComponent={{ icon: 'home', color: 'teal' }}
                    />
                </View>

                <View style={{ paddingTop: 70 }}>
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
                        source={require('./titi.jpg')}
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
                        source={require('./bird.jpg')}
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
                        source={require('./titi.jpg')}
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
                        source={require('./bird.jpg')}
                        originalWidth={2000}
                        originalHeight={1200}
                    />
                </View>


                {/* <View>
                    <LocalImage
                        source={require('./titi.jpg')}
                        originalWidth={1000}
                        originalHeight={2000}
                    />
                </View> */}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "teal"
    },

    buttonText: {
        fontSize: 17,
        fontWeight: "900",
        fontWeight: "bold",
        color: "white",
        margin: 20,
    },

    browse: {
        fontSize: 23,
        color: "black",
        margin: 10
    },

    browseText: {
        fontSize: 15,
        marginTop: -13,
        paddingLeft: 10,

    },

    buttonView: {
        color: "white",
        backgroundColor: "teal",
        borderRadius: 100,
        width: 500

    }

})

export default HomeScreen;




import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, SearchBar, View } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component {
    render() {
        return (

            <Text>hello</Text>
        )
    }
}


const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: "red",
        marginTop: 40,
    }
})
AppRegistry.registerComponent('AwesomeProject', () => App);
