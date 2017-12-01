import React, { Component } from "react";
import { SideMenu, ButtonHeaderOpenSideMenu } from "../../components";
import { DrawerNavigator } from "react-navigation";

// Screens
import HomeScreen from './HomeScreen';
import PromCupoTabScreen from '../PromCupoTabScreen';
import PontosTuristicosScreen from '../PontosTuristicosScreen';
import OndeDormirScreen from '../OndeDormirScreen';
import ComerciosScreen from '../ComerciosScreen';

const HomeScreenRouter = DrawerNavigator(
  {
 //   Promocoes: { screen: PromCupoTabScreen },
    HomeScreen : { screen: HomeScreen },
    PontosTuristicos: { screen: PontosTuristicosScreen },
    OndeDormir : { screen: OndeDormirScreen },
    Comercios: { screen: ComerciosScreen },
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerBackgroundColor: 'transparent',
    contentOptions : {
        activeBackgroundColor: 'transparent'
    }
  }
);
export default HomeScreenRouter;