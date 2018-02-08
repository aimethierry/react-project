import React, { Component } from 'react';
import {View, Text, Button, Stylesheet, TouchableHighlight,TextInput,ListView, StyleSheet} from 'react-native';

var Firebase = require('firebase');

export default class todo extends Component {
    constructor(props){
        super(props);

        var myFirebaseRef = new Firebase('https://baza-188409.firebaseio.com')

        myFirebaseRef.set = ({
            title:"hello aime",
            author:"aime thierry",
            location : {
                country:"Rwanda",
                city:"Kigali",
                state: "Germany",
                zip: 48155
            }
        })
    }
    render () {
        return (
            <View>
                <Text>Hello</Text>

                </View>
        )
    }
}

var styles = StyleSheet.create({
    container : {
        flex:1
    }
})