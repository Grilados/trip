import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import NoticiasScreen from '../screens/NoticiasScreen';
import EventosScreen from '../screens/EventosScreen';
import PromocoesScreen from '../screens/PromocoesScreen';
import PontosTuristicosScreen from '../screens/PontosTuristicosScreen';
import OndeDormirScreen from '../screens/OndeDormirScreen';
import ComerciosScreen from '../screens/ComerciosScreen';
import SobreAjudaScreen from '../screens/SobreAjudaScreen';
import CuponsScreen from '../screens/CuponsScreen';
import GerarCupomScreen from '../screens/GerarCupomScreen';
import PromCupoTabScreen from '../screens/PromCupoTabScreen';

export const Routes = StackNavigator({
    Inicio : { 
        screen: HomeScreen,
    },
    // Noticias : { 
    //     screen: NoticiasScreen,
    // },
    // Eventos : { 
    //     screen: EventosScreen,
    // },
    Promocoes : { 
        screen: PromCupoTabScreen,
    },
    PontosTuristicos : { 
        screen: PontosTuristicosScreen
    },
    OndeDormir : { 
        screen: OndeDormirScreen
    },
    Comercios : { 
        screen: ComerciosScreen
    },
    // SobreAjuda : { 
    //     screen: SobreAjudaScreen,
    //     navigationOptions : {
    //         drawerLabel: 'Sobre e Ajuda' 
    //     } 
    // },
    Cupons : { 
        screen: CuponsScreen,
        navigationOptions : {
            title: 'Cupons' ,
            headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
        } 
    },
    GerarCupom : { 
        screen: GerarCupomScreen,
        navigationOptions : {
            title: 'Gerar Cupom' ,
            headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
        } 
    },
}, {
    initialRouteName: 'Inicio',
    navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: '#7EB239', elevation: 0 }
    })
}); 

// Tabs
export const Tab = TabNavigator({
    Promocoes: { screen: PromocoesScreen },
    Cupons: { screen: CuponsScreen }
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#7EB239',
        inactiveTintColor: '#000000',
        upperCaseLabel: false,
        style: {
            backgroundColor: '#FFFFFF'
        },
        indicatorStyle: {
            backgroundColor: '#7EB239',
            height: 5
        }
    }
});