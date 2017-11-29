import React, { Component } from 'React';
import { View, 
         Text, 
         Image,
         StyleSheet 
} from 'react-native';


class User extends Component { 
    render() {
        return( 
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image source={require('../imgs/guest.png')} />
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
        paddingVertical: 15
    },
    image : {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF'
    },
    info : {
        flexDirection: 'column',
    },
    name : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    country : {
        fontSize: 16,
        fontWeight: '100',
        color: '#FFFFFF' 
    }
});