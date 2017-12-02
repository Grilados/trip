import React, { Component } from "react";
import {  BackHandler } from 'react-native';
import { SideMenu, ButtonHeaderOpenSideMenu } from "../../components";
import { DrawerNavigator } from "react-navigation";

// Screens
import NoticiasScreen from '../NoticiasScreen';
import EventosScreen from '..//EventosScreen';
import HomeScreen from './HomeScreen';
import PromCupoTabScreen from '../PromCupoTabScreen';
import PontosTuristicosScreen from '../PontosTuristicosScreen';
import OndeDormirScreen from '../OndeDormirScreen';
import ComerciosScreen from '../ComerciosScreen';
import SobreAjudaScreen from '../SobreAjudaScreen';

const HomeScreenRouter = DrawerNavigator(
  {
    Inicio : { 
        screen: HomeScreen,
        navigationOptions : {
            drawerLabel: 'Início' 
        }
    },
    Noticias : { 
        screen: NoticiasScreen,
        navigationOptions : {
            drawerLabel: 'Notícias' 
        }
    },
    Eventos : { 
        screen: EventosScreen,
        navigationOptions : {
            drawerLabel: 'Eventos' 
        }
    },
    Promocoes : { 
        screen: PromCupoTabScreen,
        navigationOptions : {
            drawerLabel: 'Promoções' 
        }
    },
    PontosTuristicos: { 
        screen: PontosTuristicosScreen, 
        navigationOptions : {
            drawerLabel: 'Pontos Turísticos' 
        }
    },
    OndeDormir : { 
        screen: OndeDormirScreen,
        navigationOptions : {
            drawerLabel: 'Onde Dormir' 
        } 
    },
    Comercios: { 
        screen: ComerciosScreen,
        navigationOptions : {
            drawerLabel: 'Comércios' 
        } 
    },
    SobreAjuda: { 
        screen: SobreAjudaScreen,
        navigationOptions : {
            drawerLabel: 'Sobre e Ajuda' 
        } 
    },
    ExitApp : {
        screen: ()=> BackHandler.exitApp(),
        navigationOptions : {
            drawerLabel: 'Sair' 
        } 
    }
  },
  {
    initialRouteName: 'Inicio',
    contentComponent: props => <SideMenu {...props} />,
    drawerBackgroundColor: 'transparent',
    contentOptions : {
        activeBackgroundColor: 'transparent'
    }
  }
);
export default HomeScreenRouter;