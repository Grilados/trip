import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions,
         Modal,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ItemChoice extends Component {
    render() {
        return( 
            <TouchableOpacity style={styles.container}>
                <Text style={styles.choice}>{this.props.choice}</Text>
                <View style={styles.indicator}>
                    <Text style={styles.txtIndicator}>*</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

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
    indicator : {
        position: 'absolute',
        right: 20,
        top: 20
    },
    txtIndicator : {
        fontSize: 15,
        color: '#0F0F0F',
    }
});