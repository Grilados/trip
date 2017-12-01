import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tab } from '../configs/Routes';
import { Header } from '../components';

export default class PromCupoTabScreen extends Component {  
    render() {
        return(
            <View style={styles.container}>
                <Header />
                <Tab />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
}); 