import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');

class ButtonCancel extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
                <Text style={styles.value}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}

export { ButtonCancel };

const styles = StyleSheet.create({
    button : {
        width: width-250,
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
        color: '#C8C9CA'
    }
});