import React from 'react';
import { TabNavigator } from 'react-navigation';

// Screens
import PromocoesScreen from '../screens/PromocoesScreen';
import CuponsScreen from '../screens/CuponsScreen';

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
            marginTop: 60,
            backgroundColor: '#FFFFFF'
        },
        indicatorStyle: {
            backgroundColor: '#7EB239',
            height: 5
        }
    }
});