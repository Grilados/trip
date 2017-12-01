import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ButtonHeaderOpenSideMenu extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={()=>this.props.onClick()}>
                <Icon  name="ios-menu-outline" color="#FFFFFF" size={27}/>
            </TouchableOpacity> 
        );
    }
}

const styles = StyleSheet.create({
    button : {
        paddingLeft: 15
    }
});

export { ButtonHeaderOpenSideMenu };