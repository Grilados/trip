import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ButtonHeaderBack extends Component {
    render() {
        return(
            <View> 
                <TouchableOpacity style={styles.button} onPress={()=>this.props.onClick()}>
                    <Icon name="ios-arrow-back" color="#FFFFFF" size={27}/>
                </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button : {
        paddingLeft: 15
    }
});

export { ButtonHeaderBack };