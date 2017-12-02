import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Header, ItemChoice, ListItem, Item } from '../components';

const { height } = Dimensions.get('window');

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
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header openSideMenu={()=>navigate("DrawerOpen")} />
                
                <View style={styles.content}>
                    <ItemChoice choice="Cachoeiras" />

                    <ListItem 
                        itens={ITENS} 
                        renderItem={(item)=> this._renderItem(item)}
                        containerStyle={styles.containerStyle}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {   
        backgroundColor: '#FFFFFF'
    },
    content: {
        marginTop: 60
    },

    containerStyle : {
        height: height-135,    
    }
});
