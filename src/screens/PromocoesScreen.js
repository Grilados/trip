import React, { Component } from 'react';
import { View, 
         Text, 
         StatusBar, 
         StyleSheet 
} from 'react-native';
import Card from '../components/Card';

export default class PromocoesScreen extends Component {  
    static navigationOptions = {
        tabBarLabel: 'Promoções',
    };

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Card />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center'
    }
}); 