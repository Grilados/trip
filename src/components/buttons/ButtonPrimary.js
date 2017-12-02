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
            // <TouchableOpacity style={styles.button} onPress={this.props.onClick}>
            //     <Text style={styles.value}>{this.props.value}</Text>
            //     <Icon  name="ios-arrow-round-forward-outline" color="#FFFFFF" size={18}/>
            // </TouchableOpacity>
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
        width: width-250,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingLeft: 5,
        // paddingRight: 5,
        // paddingTop: 5,
        // paddingBottom: 0,
        //borderRadius: 50,
        //backgroundColor: '#0C101F'
    },
    value : {
        fontSize: 16, 
        marginRight: 5,
        marginBottom: 5,
        color: '#FFFFFF'
    }
});