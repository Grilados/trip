import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header } from '../components';

export default class SobreAjudaScreen extends Component {
    render() {
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Header />
            </View>
        );
    }
}