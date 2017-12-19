import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

class ButtonWarning extends Component {
    render() {
        return(
            <TouchableOpacity activeOpacity={0.8} style={[styles.button, this.props.containerStyle]} onPress={this.props.onClick}>
                <Text style={[styles.value, {fontSize: this.props.fontSize}]}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

export { ButtonWarning };

const styles = StyleSheet.create({
    button : {
        width: 80, 
        height: 25,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#EFB126'   
    },
    value : {
        fontSize: 12, 
        color: '#FFFFFF'
    }
});