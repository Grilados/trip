import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet
} from 'react-native';

// Native componets 
import ListItem from '../components/ListItem';
import Item from '../components/Item';
import ItemChoice from '../components/ItemChoice';

// Helpers 
import { ITENS } from '../helpers/ListItemHelper';

export default class PontosTuristicosScreen extends Component {
    _renderItem({item}) {
        return(  
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Item 
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                />  
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <ItemChoice choice="Cachoeiras" />

                <ListItem 
                    itens={ITENS} 
                    renderItem={(item)=> this._renderItem(item) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
