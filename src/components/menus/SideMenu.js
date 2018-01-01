import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image, StyleSheet } from 'react-native';
import { List, ListItem } from 'native-base';
import { DrawerItems } from 'react-navigation';
import {  User } from '../index';

const { width, height } = Dimensions.get('window');

const routes = ["Inicio", "Promocoes", "Comercios"];

class SideMenu extends Component {
  renderScene(scene) {
    if (scene.focused) {
      return(
        <View style={styles.item}>
          <Image style={styles.image} source={require('../../imgs/icons/menu-selected.png')} /> 
          <Text style={styles.activeTintColor}>{this.props.getLabel(scene)}</Text>
        </View>
      );
    }
    return <Text style={styles.inactiveTintColor}>{this.props.getLabel(scene)}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.user}>
              <User />
          </View>
          <DrawerItems hidden={false}
            {...this.props}
              getLabel = {(scene) =>  (
                <View style={styles.items}>
                    {this.renderScene(scene)}
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
  item : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image : {
    width: 12,
    height: 12,
    marginRight: 10
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
