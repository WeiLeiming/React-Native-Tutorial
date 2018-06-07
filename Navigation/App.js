/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={require('./img/logo.png')}
                style={{width: 171, height: 40}}
            />
        )
    }
}

class MainScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            // title: 'Main',
            headerTitle: <LogoTitle/>,
            headerRight: (
                <Button
                    onPress={() => alert('alert')}
                    title='Info'
                    color='#9bffa5'
                />
            ),
            headerLeft: (
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title='left'
                    color='#80a2ff'
                />
            )
        }
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title="Go to profile"
                    onPress={() => navigate('Profile', {name: 'leiming', age: '26'})}
                />
                <Button
                    title={'Go to navigationItem'}
                    onPress={() => navigate('NavigationItem')}
                />
            </View>
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = ({navigation, navigationOptions}) => {
        const {params} = navigation.state;
        return {
            // title: navigation.getParam('name'),
            title: params ? params.name : 'Profile',
            headerStyle: {
                // backgroundColor: '#62b5f4',
                backgroundColor: navigationOptions.headerTintColor,
            },
            // headerTintColor: '#fff',
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    };
    render() {
        const {navigation} = this.props;
        const name = navigation.getParam('name');
        const {age} = navigation.state.params;
        return (
            <View style={styles.other}>
                <Text>Profile</Text>
                <Text>{name} + {age}</Text>
                <Button
                    title='Go to profile again'
                    onPress={() => this.props.navigation.push('Profile')}
                />
                <Button
                    title='Go to main'
                    onPress={() => this.props.navigation.navigate('Main')}
                />
                <Button
                    title='Go back'
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title='Title'
                    onPress={() => this.props.navigation.setParams({name: "Change"})}
                />
            </View>
        );
    }
}

class NavigationItem extends Component {
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            headerTitle: <LogoTitle/>,
            headerRight: (
                <Button
                    onPress={params.increaseCount}
                    title='+1'
                    color='#fff'
                />
            )
        }
    };

    componentWillMount() {
        this.props.navigation.setParams({increaseCount: this._increaseCount});
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
        // this.props.navigation.navigate('MyModal');
    };

    render() {
        return (
            <View style={styles.other}>
                <Text>NavigationItem</Text>
                <Text>{this.state.count}</Text>
            </View>
        )
    }
}

class ModalScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>This is a modal</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title='Dismiss'
                />
            </View>
        );
    }
}

const AppStackNavigation = StackNavigator(
    {
        Main: {screen: MainScreen},
        Profile: {screen: ProfileScreen},
        NavigationItem: {screen: NavigationItem}
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#c4bcf4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

const RootStack = StackNavigator(
    {
        Main: {screen: AppStackNavigation},
        MyModal: {screen: ModalScreen}
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return <RootStack/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    other: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
