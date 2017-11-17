import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         StyleSheet
} from 'react-native';
import Search from '../components/Search';

export default class ComerciosScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Search />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});