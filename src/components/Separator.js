import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

class Separator extends Component { 
    render() {
        return <View style={styles.container} />    
    }
}

export { Separator };

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 2,
        backgroundColor: '#9EC56A'
    }
});