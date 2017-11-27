import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { ButtonHeaderOpenSideMenu } from '../index';
// import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../screens/HomeScreen';
import NoticiasScreen from '../../screens/NoticiasScreen';
import EventosScreen from '../../screens/EventosScreen';
import PromocoesScreen from '../../screens/PromocoesScreen';
import PontosTuristicosScreen from '../../screens/PontosTuristicosScreen';
import OndeDormirScreen from '../../screens/OndeDormirScreen';
import ComerciosScreen from '../../screens/ComerciosScreen';
import SobreAjudaScreen from '../../screens/SobreAjudaScreen';
import CuponsScreen from '../../screens/CuponsScreen';
import GerarCupomScreen from '../../screens/GerarCupomScreen';
import PromCupoTabScreen from '../../screens/PromCupoTabScreen';


const { width } = Dimensions.get('window');

// Menu
const SideMenu = DrawerNavigator({
    Inicio : { 
        screen: HomeScreen
    },
    // Noticias : { 
    //     screen: NoticiasScreen,
    //     navigationOptions : {
    //         drawerLabel: 'Notícias' 
    //     } 
    // },
    // Eventos : { 
    //     screen: EventosScreen,
    //     navigationOptions : {
    //         drawerLabel: 'Eventos' 
    //     } 
    // },
    Promocoes : { 
        screen: PromCupoTabScreen,
        navigationOptions : {
            drawerLabel: 'Promoções'
        }
    },
    PontosTuristicos : { 
        screen: PontosTuristicosScreen,
        navigationOptions : {
            drawerLabel: 'Pontos Turísticos' 
        } 
    },
    // OndeDormir : { 
    //     screen: OndeDormirScreen,
    //     navigationOptions : {
    //         drawerLabel: 'Onde Dormir' 
    //     } 
    // },
    Comercios : { 
        screen: ComerciosScreen,
        navigationOptions : {
            drawerLabel: 'Comércios' 
        } 
    },
    // SobreAjuda : { 
    //     screen: SobreAjudaScreen,
    //     navigationOptions : {
    //         drawerLabel: 'Sobre e Ajuda' 
    //     } 
    // },
    ExitApp : {
        screen: ()=> BackHandler.exitApp(),
        navigationOptions : {
            drawerLabel: 'Sair' 
        } 
    }
}, {
    drawerWidth: width-150,
   // initialRouteName: 'Inicio',
    contentOptions : {
        activeTintColor: '#82B43F'
    }
});

export { SideMenu };