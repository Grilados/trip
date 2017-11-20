import React, { Component } from 'react';
import { View, 
         Text, 
         StatusBar
} from 'react-native';

// Helpers 
import { ITENS } from '../helpers/NoticiasHelper';

export default class NoticiasScreen extends Component {
    render() {
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Text>NoticiasSreen</Text>
            </View>
        );
    }
}