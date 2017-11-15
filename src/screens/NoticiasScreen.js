import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class NoticiasScreen extends Component {
    render() {
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Text>NoticiasScreen</Text>
            </View>
        );
    }
}