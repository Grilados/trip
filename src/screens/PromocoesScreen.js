import React, { Component } from 'react';
import { View, 
         Text, 
         StatusBar, 
         StyleSheet 
} from 'react-native';
import Card from '../components/Card';
import ListItem from '../components/ListItem';

// Helpers 
import { ITENS } from '../helpers/PromocoesHelper';

export default class PromocoesScreen extends Component {  
    static navigationOptions = {
        tabBarLabel: 'Promoções',
    };

    _renderItem({item}) {
        return(  
            <View style={styles.card}>
                <Card />
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />

                <ListItem 
                    itens={ITENS} 
                    renderItem={(item)=> this._renderItem(item)}
                    showsVerticalScrollIndicator={false}
                />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    card : {
        marginVertical: 15,
    }
}); 