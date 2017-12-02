import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         Dimensions,
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
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header openSideMenu={()=>navigate("DrawerOpen")} />
                
                <View style={styles.content}>
                    <Search />

                    <ListItem 
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