import React from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';

// Screens
import HomeScreen from '../screens/HomeScreen';
import NoticiasScreen from '../screens/NoticiasScreen';
import EventosScreen from '../screens/EventosScreen';
import PromocoesScreen from '../screens/PromocoesScreen';
import PontosTuristicosScreen from '../screens/PontosTuristicosScreen';
import OndeDormirScreen from '../screens/OndeDormirScreen';
import ComerciosScreen from '../screens/ComerciosScreen';
import SobreAjudaScreen from '../screens/SobreAjudaScreen';
import GerarCupomScreen from '../screens/GerarCupomScreen';

// Menu
const Menu = DrawerNavigator({
    Inicio : { 
        screen: HomeScreen,
        navigationOptions : {
            title: 'Início' 
        } 
    },
    Noticias : { 
        screen: NoticiasScreen,
        navigationOptions : {
            title: 'Notícias' 
        } 
    },
    Eventos : { 
        screen: EventosScreen,
        navigationOptions : {
            title: 'Eventos' 
        } 
    },
    Promocoes : { 
        screen: PromocoesScreen,
        navigationOptions : {
            title: 'Promoções' 
        } 
    },
    PontosTuristicos : { 
        screen: PontosTuristicosScreen,
        navigationOptions : {
            title: 'Pontos Turísticos' 
        } 
    },
    OndeDormir : { 
        screen: OndeDormirScreen,
        navigationOptions : {
            title: 'Onde Dormir' 
        } 
    },
    Comercios : { 
        screen: ComerciosScreen,
        navigationOptions : {
            title: 'Comércios' 
        } 
    },
    SobreAjuda : { 
        screen: SobreAjudaScreen,
        navigationOptions : {
            title: 'Sobre e Ajuda' 
        } 
    },
    ExitApp : {
        screen: ()=> BackHandler.exitApp(),
        navigationOptions : {
            title: 'Sair' 
        } 
    }
}, {
    contentOptions : {
        activeTintColor: '#82B43F'
    }
});

// Tabs
const Tab = TabNavigator({
    Promocoes: {screen: PromocoesScreen},
    SobreAjuda: {screen: SobreAjudaScreen}
});

const Routes = StackNavigator({
    PontosTuristicosScreen : { 
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
            headerLeft: <View> 
                            <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate('DrawerOpen')}> 
                                <Text style={styles.txtMenu}> Menu </Text>
                            </TouchableOpacity> 
                        </View>
        })
        
    },
    // Cupons : { 
    //     screen: CuponsScreen,
    //     navigationOptions : {
    //         title: 'Gerar Cupom' ,
    //         headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
    //     } 
    // },
    GerarCupom : { 
        screen: GerarCupomScreen,
        navigationOptions : {
            title: 'Gerar Cupom' ,
            headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
        } 
    },
}, {
    initialRouteName: 'GerarCupom'
}); 

export {Routes, Tab};

const styles = StyleSheet.create({
    menu : {
        paddingLeft: 15,
    },
    txtMenu : {
        color: '#FFFFFF'
    }
});