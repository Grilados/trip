import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';
import ItemChoice from '../components/ItemChoice';
import ListItem from '../components/ListItem';
import Item from '../components/Item';

// Helpers 
import { ITENS } from '../helpers/PontosTuristicosHelper';

export default class PontosTuristicosScreen extends Component {
    _renderItem({item}) {
        return(  
            <View>
                <Item 
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                    layout="places"
                />  
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <ItemChoice choice="Cachoeiras" />

                <ListItem 
                    itens={ITENS} 
                    renderItem={(item)=> this._renderItem(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});
