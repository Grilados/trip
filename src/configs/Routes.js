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
import CuponsScreen from '../screens/CuponsScreen';
import GerarCupomScreen from '../screens/GerarCupomScreen';
import PromCupoTabScreen from '../screens/PromCupoTabScreen';

// Menu
const Menu = DrawerNavigator({
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
    PontosTuristicos : { 
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
    Comercios : { 
        screen: ComerciosScreen,
        navigationOptions : {
            drawerLabel: 'Comércios' 
        } 
    },
    SobreAjuda : { 
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
}, {
    initialRouteName: 'Inicio',
    contentOptions : {
        activeTintColor: '#82B43F'
    }
});

export const Routes = StackNavigator({
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
   // initialRouteName: 'Cupons'
}); 

// Tabs
export const Tab = TabNavigator({
    Promocoes: {screen: PromocoesScreen},
    Cupons: {screen: CuponsScreen}
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
            backgroundColor: '#7EB239'
        }
    }
    
});

const styles = StyleSheet.create({
    menu : {
        paddingLeft: 15,
    },
    txtMenu : {
        color: '#FFFFFF'
    }
});