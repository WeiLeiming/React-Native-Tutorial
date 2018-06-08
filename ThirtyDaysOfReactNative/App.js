/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import {HomeScreen} from './src/HomeScreen'

const HomeNavigator = StackNavigator(
    {
        Home: {screen: HomeScreen},
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            title: '30 Days of RN',
        }
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <HomeNavigator />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
