import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet
} from 'react-native';
import ListItem from '../components/ListItem';
import Item from '../components/Item';

// Helpers 
import { ITENS } from '../helpers/CuponsHelper';

export default class GerarCupomScreen extends Component {   
    _renderItem({item}) {
        return(  
            <View style={styles.item}>
                <Item 
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                    layout="coupon"
                />
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
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    item : {
        marginTop: 20
    }
}); 