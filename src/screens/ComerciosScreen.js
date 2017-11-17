import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         StyleSheet
} from 'react-native';
import Search from '../components/Search';
import ListItem from '../components/ListItem';
import Item from '../components/Item';

// Helpers 
import { ITENS } from '../helpers/ComerciosHelper';

export default class ComerciosScreen extends Component {
    _renderItem({item}) {
        return(  
            <View>
                <Item 
                    image={item.image}
                    title={item.title}
                    phone={item.phone}
                    content={item.content} 
                    layout="trade"
                />  
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Search />

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
        flex: 1
    }
});