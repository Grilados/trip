import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions,
         Modal,
         TextInput,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default class Search extends Component {
    render() {
        return( 
            <View style={styles.container}>
                <View style={styles.containerIcon}>
                    <Icon name="ios-search-outline" color="#0C101F" size={27}/>
                </View>
                <TextInput 
                    style={styles.search} 
                    value={this.props.search} 
                    maxLength={50}
                    selectionColor="#000000"
                    underlineColorAndroid="#FFFFFF"
                    placeholder="Restaurante, Farmácia..."
                />
                <TouchableOpacity style={styles.containerIndicator}>
                    <Icon  name="ios-arrow-dropright-circle" color="#0C101F" size={27}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 45,
        width,
        padding: 5,
        backgroundColor: '#FFFFFF',
        elevation: 5
    },
    search : {
        width: width-130, 
        fontSize: 20,
        color: '#0F0F0F',
        marginLeft: 4,
    },
    containerIcon : {
        position: 'absolute',
        left: 20,
        top: 15
    },
    containerIndicator : {
        position: 'absolute',
        right: 20,
        top: 15
    }
});
