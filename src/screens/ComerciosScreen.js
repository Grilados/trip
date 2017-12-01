import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         StyleSheet
} from 'react-native';
import { Header,
        Search, 
         ListItem,
         Item,
         Message,
         ButtonPrimary   
} from '../components';

// Helpers 
import { ITENS } from '../helpers/ComerciosHelper';

export default class ComerciosScreen extends Component {
    _listFooterComponent() {
        return(
            <View style={styles.listFooterComponent}>
                <Message title="Cadastre-se" content="Receba promoções especiais direto em seu aplicativo"/>
                <ButtonPrimary value="Continuar" />
            </View>
        );  
    }

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
                <Header />
                
                <View style={styles.content}>
                    <Search />

                    <ListItem 
                        itens={ITENS} 
                        renderItem={(item)=> this._renderItem(item)}
                        ListFooterComponent={()=>this._listFooterComponent()}
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
    },
    listFooterComponent : {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});