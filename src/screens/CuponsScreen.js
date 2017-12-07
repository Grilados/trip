import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet
} from 'react-native';
import { List, ItemCoupon } from '../components';

// Helpers 
import { ITENS } from '../helpers/CuponsHelper';

export default class GerarCupomScreen extends Component {   
    static navigationOptions = {
        tabBarLabel: 'Cupons',
    };

    _renderItem({item}) {
        const { navigate } = this.props.navigation;
        return(  
            <View style={styles.item}>
                <ItemCoupon
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                    ButtonDeleteOnClick={()=>alert('delete')}
                    ButtonWarningOnClick={()=>navigate('GerarCupom')}
                />
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                     
                <List 
                    itens={ITENS} 
                    renderItem={(item)=> this._renderItem(item)}
                    ListHeaderComponent={()=><View style={styles.separator} />}
                    ListFooterComponent={()=><View style={styles.separator} />}
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
    separator : {
        height: 15
    },
    item : {
        marginTop: 10,
        marginBottom: 5
    }
}); 