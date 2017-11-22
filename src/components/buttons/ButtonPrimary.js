import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class ButtonPrimary extends Component {
    render() {
        return(
            <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
                <Text style={styles.value}>{this.props.value}</Text>
                <Icon  name="ios-arrow-round-forward-outline" color="#FFFFFF" size={18}/>
            </TouchableOpacity>
        );
    }
}

export { ButtonPrimary };

const styles = StyleSheet.create({
    button : {
        width: width-250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#0C101F'
    },
    value : {
        fontSize: 16, 
        marginRight: 5,
        marginBottom: 5,
        color: '#FFFFFF'
    }
});