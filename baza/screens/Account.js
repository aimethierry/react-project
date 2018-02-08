
import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import LocalImage from './LocalImage';
import { Footer } from 'react-native-elements';

export default class SidebarScreen extends Component {
    render() {
        return (

           <View style={{backgroundColor:"white"}}>
               
                    <View style={{ paddingLeft: 150, paddingTop: 20, fontWeight: "italic", backgroundColor: "teal", paddingBottom:100}}>
                        <Text style={styles.name}>Aime Thierry</Text>
                    </View>
                  
                  
              

                </View>
          
        )
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: "null",
        alignSelf: "stretch",
    },

    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',

    },


    profilepicWrap: {
        width: 180,
        height: 580,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
       
    },

    profilepic: {
        flex: 1,
        height:300,
        alignSelf: "stretch",
        borderRadius: 100,
        
    },

    name: {
        marginTop: 20,
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },

    pos: {
        fontSize: 14,
        color: "teal",
        paddingTop:100,
        fontWeight: "300",
        fontStyle: "italic",
    },




})

