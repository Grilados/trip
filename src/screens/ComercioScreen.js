import React, { Component } from 'react';
import { View, 
         Text,
         StatusBar,
         TouchableOpacity,
         Dimensions,
         StyleSheet
} from 'react-native';
import { Header, ItemTrade, Message, ButtonPrimary } from '../components';

const { width } = Dimensions.get('window');

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
                        phone="Restaurante"
                        content={params.item.content} 
                    />

                    <View style={styles.contact}>
                        <Text style={styles.contactTitle}>Contato</Text>
                        <Text style={styles.contactPhone}>(19) 1000-20000 / (19) 2000-3000</Text>
                        <Text style={styles.contactEmail}>conato@kfcbrasil.com.br</Text>
                    </View> 

                    <View style={styles.operating}>
                        <Text style={styles.operatingTitle}>Horário de funcionamento</Text>
                        <Text style={styles.operatingInfo}>Seg - Sex 08:30h as 19:00h</Text>
                        <Text style={styles.operatingInfo}>Sab 08:30h as 17:00h</Text>
                    </View> 

                    <View style={styles.activePromotions}>
                        <Message title="Promoções" content="Este restaurante possui promoções ativas"/>
                        <ButtonPrimary value="Participar" onClick={()=>alert('click')}/>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.map}>

                    </View>
                    <View style={styles.traceRoute}>
                        <TouchableOpacity onPress={()=>alert('Traçar Rota')}>
                            <Text style={styles.route}>Traçar Rota</Text>
                        </TouchableOpacity>
                    </View>
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
    contact : {
        flexDirection: 'column',
        width,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    contactTitle : {
        fontSize: 18,
        paddingBottom: 3, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    },
    contactPhone : {
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 3, 
        color: '#0F0F0F'
    },
    contactEmail : {
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 3, 
        color: '#0F0F0F'
    },
    operating : {
        flexDirection: 'column',
        width,
        padding: 20
    },
    operatingTitle : {
        fontSize: 18,
        paddingBottom: 3, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    }, 
    operatingInfo : {
        fontSize: 18,
        lineHeight: 20,
        paddingBottom: 3, 
        color: '#0F0F0F'
    },
    activePromotions : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer : {
        position: 'absolute',
        bottom: 0,
        width,
        height: 50,
        flexDirection: 'row'
    },
    map : {
        flex: 1,
        backgroundColor: 'red'
    },
    traceRoute : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C101F'
    },
    route : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});