import React, { Component } from 'React';
import { View, 
         Text, 
         Image,
         StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class User extends Component { 
    render() {
        return( 
            <View style={styles.container}>
                <View style={styles.image}>
                    {/* <Image source={require('../imgs/guest.png')} /> */}
                    <Icon  name="ios-contact-outline" color="#FFFFFF" size={40}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}> Vitor Hugo Alves </Text> 
                    <Text style={styles.country}> Campinas-SP </Text> 
                </View>
            </View>
        )
    }
}

export { User };

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15
    },
    image : {
        marginRight: 10,
    },
    info : {
        flexDirection: 'column',
    },
    name : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    country : {
        fontSize: 14,
        fontWeight: '100',
        color: '#FFFFFF' 
    }
});