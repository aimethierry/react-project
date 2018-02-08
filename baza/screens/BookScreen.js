
import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LocalImage from './LocalImage'

export default class BookScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('./bird.jpg')} style={{ width: 78, height: 34 }}
                      
                    />
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

                    <View style={styles.bodyView}>
                        <Text style={styles.title}>Description</Text>

                        <Text style={styles.paragraph}> 
                            Description Description Description Description Description Description Description Description
                            Description Description Description Description Description Description Description Description
                               </Text>
                        </View>
                      

                    <View style={styles.bodyView}>
                        <Text style={styles.title}>Working Time</Text>
                        <Text style={styles.paragraph}>
                         Description Description Description Description 
                         Description Description Description Description 
                         </Text>
                    </View>



                    <View style={{paddingTop:10, paddingLeft:10}}>
                        <Text style={styles.title}>Our Services</Text>
                        <View style={{ paddingTop: 10, paddingLeft: 5 }}>
                            <TouchableOpacity style={styles.Button1}>
                                <Text>Haircut</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Button1}>
                                <Text>Spa</Text>
                            </TouchableOpacity>


                             <TouchableOpacity style={styles.Button1}>
                                <Text>Skin</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.Button1}>
                                <Text>Body</Text>
                            </TouchableOpacity>
                            </View>
                    </View>

                    <View style={styles.bodyView}>
                        <Text style={styles.title}>Working Time</Text>
                        <Text style={styles.paragraph}>
                            Description Description Description Description
                         Description Description Description Description
                         </Text>
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
   
    bodyView : {
        paddingTop:10,
        paddingLeft:20,
    },

    title : {
        paddingLeft:10,
        color:"black",
        fontSize:17,
        paddingTop:10,
        fontWeight:"bold"
    },

   paragraph: {
       paddingLeft: 10,
       color: "black",
       fontSize: 13,
       paddingTop: 10,
       fontWeight: "bold"
   },

   Button1 : {
       backgroundColor: "teal",
       margin : 2,
       width:null,
       height:30,
       borderRadius:20,
       alignItems:"center",
       justifyContent:"center"

   },

    Button2: {
        backgroundColor: "teal",
       paddingLeft:100,
        width: 100,
        height: 30,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"

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
    }

})

