import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { Icon } from 'react-native-elements';

// Screens
import PlacesScreen from '../screens/PlacesScreen';

// Rotas
const Menu = DrawerNavigator({
    Places : { 
        screen: PlacesScreen,
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
    Places : { 
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#7EB239' },
            headerLeft: <View> 
                            <TouchableOpacity style={styles.menu} onPress={()=>navigation.navigate('DrawerOpen')}> 
                                <Text style={styles.menu}> Menu </Text>
                            </TouchableOpacity> 
                        </View>
        })
        
    }
}); 

export default Routes;

const styles = StyleSheet.create({
    menu : {
        paddingLeft: 10
    }
});