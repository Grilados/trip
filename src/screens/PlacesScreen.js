import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

// Native componets 
import ListItem from '../components/ListItem';
import Item from '../components/Item';

// Helpers 
import { ITENS } from '../helpers/ListItemHelper';

export default class PlacesScreen extends Component {
    _renderItem({item}) {
        return(  
            <Item 
            image={item.image}
            title={item.title}
            content={item.content} 
            />  
        );
    }

    render() {
        return(
            <View style={styles.container}>
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
        flex: 1,
    }
});
