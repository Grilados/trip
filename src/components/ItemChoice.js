import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions,
         Modal,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class ItemChoice extends Component {
    render() {
        return( 
            <TouchableOpacity style={styles.container}>
                <Text style={styles.choice}>{this.props.choice}</Text>
                <TouchableOpacity style={styles.containerIndicator}>
                    <Icon  name="ios-arrow-down" color="#0C101F" size={27}/>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

export { ItemChoice };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width,
        padding: 15,
        backgroundColor: '#FFFFFF',
        elevation: 5
    },
    choice : {
        fontSize: 18,
        color: '#0F0F0F',
        marginLeft: 4
    },
    containerIndicator : {
        position: 'absolute',
        right: 20,
        top: 15
    }
});