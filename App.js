import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HomeScreenRouter from "./src/screens/HomeScreen/index.js";

export default class App extends Component {
  render() {
    return <HomeScreenRouter />;
  }
}


