import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';
import { DrawerItems } from 'react-navigation';
import {  User } from '../index';

const { width, height } = Dimensions.get('window');

const routes = ["Inicio", "Promocoes", "Comercios"];

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.user}>
              <User />
          </View>
          <DrawerItems hidden={false}
            {...this.props}
                getLabel = {(scene) => (
                <View style={styles.items}>
                    <Text style={scene.focused ? styles.activeTintColor : styles.inactiveTintColor}>{this.props.getLabel(scene)}</Text>
                </View>
            )}
          />
      </View>
    );
  }
}

export { SideMenu };

const styles = StyleSheet.create({
  container : {
    flex: 1,
    position: 'absolute', 
    top: 0,
    bottom: 0, 
    left: 0, 
    right: 0,
    width: width-100,
    height,
    backgroundColor: '#0E1419',
    borderTopRightRadius: 10
  },
  items : {
    width: width-150,
    paddingVertical: 14,
    paddingLeft: 20,
    borderColor: '#25303A',
    borderBottomWidth: 0.5,
  },
    inactiveTintColor : {
    fontSize: 16,
    color: '#FFFFFF'
  },
    activeTintColor : {
    fontSize: 16,
    color: '#F6BB27'
  },
  user : {
    marginTop: 20,
    paddingLeft: 20,     
}
});
