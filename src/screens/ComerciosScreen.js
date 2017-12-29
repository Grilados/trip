import React, { Component } from 'react';
import { View, 
         Text,
         TouchableOpacity,
         StatusBar,
         Dimensions,
         StyleSheet
} from 'react-native';
import { Header,
        Search, 
         List,
         ItemTrade,
         Message,
         ButtonPrimary   
} from '../components';

// Helpers 
import { ITENS } from '../helpers/ComerciosHelper';

const { height } = Dimensions.get('window');

export default class ComerciosScreen extends Component {
    _listFooterComponent() {
        return(
            <View style={styles.listFooterComponent}>
                <Message title="Cadastre-se" content="Receba promoções especiais direto em seu aplicativo"/>
                <ButtonPrimary value="Continuar" onClick={()=>alert('click')}/>
            </View>
        );  
    }

    _renderItem({item}) {
        const { navigate } = this.props.navigation;
        return(  
            <TouchableOpacity onPress={()=>navigate("Comercio", { item })}>
                <ItemTrade
                    image={item.image}
                    title={item.title}
                    phone={item.phone}
                    content={item.content} 
                />  
            </TouchableOpacity>
        );
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header onClick={()=>goBack()} />
                
                <View style={styles.content}>
                    <Search />

                    <List 
                        itens={ITENS} 
                        renderItem={(item)=> this._renderItem(item)}
                        ListFooterComponent={()=>this._listFooterComponent()}
                        containerStyle={styles.containerStyle}
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 35
    },

    containerStyle : {
        height: height-135,    
    }
});