import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { AppRegistry, Text } from 'react-native';

export const Tabs = TabNavigator({
    feed: {
        screen: feed,
    },

    me: {
        screen: me,
    }
})

export default class Appp extends Component {
    render() {
        return (
            <Text>Hello world </Text>
        )
    }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
