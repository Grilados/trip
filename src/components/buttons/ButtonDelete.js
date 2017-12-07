import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

class ButtonDelete extends Component {
    render() {
        return(
            <Button 
                title={this.props.value} 
                backgroundColor='#FFFFFF'
                textStyle={{ color: '#777981' }}
                borderRadius={50}
                buttonStyle={this.props.buttonStyle}
                onPress={this.props.onClick}
                fontSize={this.props.fontSize}
            />
        );
    }
}

export { ButtonDelete };