import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import {  User } from '../index';

const { width, height } = Dimensions.get('window');

const routes = ["Inicio", "Promocoes", "Comercios"];

class FooterMenu extends Component { 
    render() {
        return(
            <View style={styles.container}>
                    <Image style={styles.image} source={require('../../imgs/starbucks2.jpg')} />
                    <View style={styles.info}>
                        <Text style={styles.title} numerOfLines={1}>Starbucks</Text>
                        <Text style={styles.content} numerOfLines={2}>Promoção imbatível, compre um e leve outro, confira!</Text>
                    </View>
            </View>
        )
    }
}

export { FooterMenu };

const styles = StyleSheet.create({
    container: {
        width,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0E1419'
    },
    image : {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginLeft: 20,
        marginRight: 20
    },
    info : {
        justifyContent: 'flex-start',
        width: 220,
        marginRight: 10
    },
    title : {
        fontSize: 18, 
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    content : {
        color: '#FFFFFF',
        fontSize: 16
    }
});