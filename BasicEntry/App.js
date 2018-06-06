/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ScrollView,
    FlatList,
    SectionList
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText }
            });
        }, 1000);
    }
    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            /*
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Image source={pic} style={{width: 193, height:110}}/>

                <View style={{flex: 1, alignItems: 'center', backgroundColor: 'skyblue'}}>
                    <Greeting name='LeiMing'/>
                    <Greeting name='yzy'/>
                    <Greeting name='123'/>
                </View>

                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <Blink text='I love to blink'/>
                </View>
            </View>
            */
            /*
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40, top: 100}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
            */
            /*
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Image source={require('./img/favicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
            */
            /*
            <View style={styles.flatListContainer}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'}
                    ]}
                    renderItem={({item}) => <Text style={styles.flatListItem}>{item.key}</Text>}
                />
            </View>
            */
            <View style={styles.sectionContainer}>
                <SectionList
                    sections={[
                        {title: 'D', data: [{key: 'Devin'}]},
                        {title: 'J', data: [{key: 'Jackson'}, {key: 'James'}, {key: 'Jillian'}, {key: 'Jimmy'}, {key: 'Joel'}, {key: 'John'}, {key: 'Julie'}]},
                    ]}
                    renderItem={({item}) => <Text style={styles.sectionItem}>{item.key}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        paddingTop: 22,
    },
    flatListItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionContainer: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247, 247, 247, 1.0)',
    },
    sectionItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
