import React, { Component } from 'react';
import { View, 
         Text, 
         Dimensions,
         StyleSheet 
} from  'react-native';

const { width } = Dimensions.get('window');

class Message extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.content}>{this.props.content}</Text>
                </View>
            </View>
        );
    }
}

export { Message };

const styles = StyleSheet.create({
    container : {
        width: width-80,
        alignSelf: 'center',
        paddingTop: 10, 
        paddingBottom: 20
    },
    
    info : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#7EB239'
    },
    content : { 
        fontSize: 18,
        textAlign: 'center',
        color: '#858585'
    }
});