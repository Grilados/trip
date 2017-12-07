import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

class ButtonPrimary extends Component {
    render() {
        return(
            <Button 
                containerViewStyle={styles.button} 
                title={this.props.value} 
                backgroundColor='#0C101F'
                borderRadius={50}
                buttonStyle={{ height: 30 }}
                onPress={this.props.onClick}
            />
        );
    }
}

export { ButtonPrimary };

const styles = StyleSheet.create({
    button : {
        width: width-250
    },
    value : {
        fontSize: 16, 
        marginRight: 5,
        marginBottom: 5,
        color: '#FFFFFF'
    }
});