import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';

// Screens
import NoticiasScreen from '../screens/NoticiasScreen';
import EventosScreen from '../screens/EventosScreen';
import PromocoesScreen from '../screens/PromocoesScreen';
import PontosTuristicosScreen from '../screens/PontosTuristicosScreen';
import OndeDormirScreen from '../screens/OndeDormirScreen';
import ComerciosScreen from '../screens/ComerciosScreen';
import SobreAjudaScreen from '../screens/SobreAjudaScreen';

// Rotas
const Menu = DrawerNavigator({
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

const Routes = StackNavigator({
    Lugares : { 
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#7EB239', elevation: 0 },
            headerLeft: <View> 
                            <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate('DrawerOpen')}> 
                                <Text style={styles.txtMenu}> Menu </Text>
                            </TouchableOpacity> 
                        </View>
        })
        
    }
}); 

export default Routes;

const styles = StyleSheet.create({
    menu : {
        paddingLeft: 15,
    },
    txtMenu : {
        color: '#FFFFFF'
    }
});