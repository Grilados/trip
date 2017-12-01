import React, { Component } from 'react';
import { View, 
         Text, 
         Image,
         Dimensions,
         StatusBar, 
         StyleSheet 
} from 'react-native';

const { width } = Dimensions.get('window');

class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

export { Header };

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height: 60,
        top: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#7EB239',
    }
});



