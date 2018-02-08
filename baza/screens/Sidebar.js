
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Button } from 'react-native-elements';


var Firebase = require('firebase')








export default class SidebarScreen extends Component {
    constructor(props) {
        super(props);
        var myFirebaseRef = new Firebase('https://baza-188409.firebaseio.com/')

        myFirebaseRef.set({
            school:"riv",
            place:"kigali"
        })
    }
}
    
    
   

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#f2f2f2',
    },
    listview: {
        flex: 1,
    },
    li: {
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
    liContainer: {
        flex: 2,
    },
    liText: {
        color: '#333',
        fontSize: 16,
    },
    navbar: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 44,
        flexDirection: 'row'
    },
    navbarTitle: {
        color: '#444',
        fontSize: 16,
        fontWeight: "500"
    },
    statusbar: {
        backgroundColor: '#fff',
        height: 22,
    },

    center: {
        textAlign: 'center',
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    action: {
        backgroundColor: '#24CE84',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },

    body: {
        flex:1,
    }
    
})

