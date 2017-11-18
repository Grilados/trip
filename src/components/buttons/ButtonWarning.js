import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default class ButtonPrimary extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
                <Icon  name="ios-checkmark-outline" color="#FFFFFF" size={18}/>
                <Text style={styles.value}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button : {
        width: width-250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#EFB126'
    },
    value : {
        fontSize: 16, 
        marginLeft: 5,
        color: '#FFFFFF'
    }
});