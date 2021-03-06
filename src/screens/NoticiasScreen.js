import React, { Component } from 'react';
import { View, 
         Text, 
         StatusBar
} from 'react-native';
import { Header } from '../components';

// Helpers 
import { ITENS } from '../helpers/NoticiasHelper';

export default class NoticiasScreen extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        return(
            <View>
                <StatusBar backgroundColor='#7EB239' />
                <Header onClick={()=>goBack()} />
            </View>
        );
    }
}