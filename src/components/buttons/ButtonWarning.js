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
            <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
                <Text style={styles.value}>{this.props.value}</Text>
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