import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Tab } from '../configs/Routes';

export default class PromocoesScreen extends Component {
    render() {
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Tab />
            </View>
        );
    }
}