import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default class ButtonDelete extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
                <Icon  name="ios-close-outline" color="#777981" size={18}/>
                <Text style={styles.value}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button : {
        //width: width-260,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#FFFFFF'
    },
    value : {
        fontSize: 16, 
        marginLeft: 5,
        color: '#777981'
    }
});