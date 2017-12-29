import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         Dimensions,
         StyleSheet
} from 'react-native';
import { Header, ItemTrade } from '../components';

export default class ComercioScreen extends Component {
    render() {
        const { navigate, goBack } = this.props.navigation;
        const { params } = this.props.navigation.state;

        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header onClick={()=>goBack()}/> 
                
                <View style={styles.content}>
                    <ItemTrade
                        image={params.item.image}
                        title={params.item.title}
                        phone={params.item.phone}
                        content={params.item.content} 
                    /> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        marginTop: 60
    }
});