import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
import { ButtonHeaderOpenSideMenu, User } from '../index';
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


const { width, height } = Dimensions.get('window');

// // Menu
const SideMenu = DrawerNavigator({
    Inicio : { 
        screen: HomeScreen
    },
//     // Noticias : { 
//     //     screen: NoticiasScreen,
//     //     navigationOptions : {
//     //         drawerLabel: 'Notícias' 
//     //     } 
//     // },
//     // Eventos : { 
//     //     screen: EventosScreen,
//     //     navigationOptions : {
//     //         drawerLabel: 'Eventos' 
//     //     } 
//     // },
    Promocoes : { 
        screen: PromCupoTabScreen,
        navigationOptions : {
            drawerLabel: 'Promoções'
        }
    },
//     PontosTuristicos : { 
//         screen: PontosTuristicosScreen,
//         navigationOptions : {
//             drawerLabel: 'Pontos Turísticos' 
//         } 
//     },
//     // OndeDormir : { 
//     //     screen: OndeDormirScreen,
//     //     navigationOptions : {
//     //         drawerLabel: 'Onde Dormir' 
//     //     } 
//     // },
    Comercios : { 
        screen: ComerciosScreen,
        navigationOptions : {
            drawerLabel: 'Comércios' 
        } 
    },
//     // SobreAjuda : { 
//     //     screen: SobreAjudaScreen,
//     //     navigationOptions : {
//     //         drawerLabel: 'Sobre e Ajuda' 
//     //     } 
//     // },
    ExitApp : {
        screen: ()=> BackHandler.exitApp(),
        navigationOptions : {
            drawerLabel: 'Sair' 
        } 
    }
},{
    contentComponent: (props)=> (
        <View style={styles.drawerComponent}>
            <View style={styles.user}>
                <User />
            </View>
            <DrawerItems hidden={false}
                {...props}
                    getLabel = {(scene) => (
                    <View style={styles.items}>
                        <Text style={scene.focused ? styles.activeTintColor : styles.inactiveTintColor}>{props.getLabel(scene)}</Text>
                    </View>
                )}
            />
        </View>
    ),
    drawerBackgroundColor: 'transparent',
    contentOptions : {
        activeBackgroundColor: 'transparent'
    }
});

export { SideMenu };

const styles = StyleSheet.create({
    drawerComponent : {
        flex: 1,
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0,
        width: width-100,
        height: height,
        backgroundColor: '#0E1419',
        borderTopRightRadius: 10
    },
    items : {
        width: width-150,
        paddingVertical: 16,
        paddingLeft: 20,
        borderColor: '#576169',
        borderBottomWidth: 0.5,
    },
    inactiveTintColor : {
        fontSize: 18,
        color: '#FFFFFF'
    },
    activeTintColor : {
        fontSize: 18,
        color: '#F6BB27'
    },
    user : {
        marginTop: 20,
        paddingLeft: 20,     
    }
});

  