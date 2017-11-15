import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Native componets 
import Routes from './src/configs/Routes';

export default class App extends Component {
  render() {
    return(
      <Routes />
    )
  }
}


