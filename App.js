/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Native componets 
import ListItem from './src/components/ListItem';
import Item from './src/components/Item';

// Helpers 
import ListItemHelper from './src/helpers/ListItemHelper';

const ITENS = [
  {id: 0, title: 'Lorem'},
  {id: 1, title: 'Lorem'},
  {id: 2, title: 'Lorem'},
  {id: 3, title: 'Lorem'},
  {id: 4, title: 'Lorem'},
];

export default class App extends Component {

  _renderItem({item}) {
    return (
      <View style={styles.container}>
        <Item 
          image={require('./src/imgs/cachoeira1.jpg')}
          title="Cachoeira Eubiose"
          content="Trevo Baependi x Sobradinho a 2,5 km da cidade, São Thomé das Letras/MG" 
        />  
      </View>
    );
  }

  render() {
    return(
      <ListItem 
        itens={ITENS} 
        renderItem={({item})=> this._renderItem(item) }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
