import React, { Component } from 'react';
import { View, 
         Text, 
         StatusBar, 
         StyleSheet 
} from 'react-native';

export default class PromocoesScreen extends Component {  
    static navigationOptions = {
        tabBarLabel: 'Promoções',
    };

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Text>Promoções</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
}); 