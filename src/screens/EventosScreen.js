import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Header } from '../components';

export default class EventosScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Header openSideMenu={()=>navigate("DrawerOpen")} />
            </View>
        );
    }
}