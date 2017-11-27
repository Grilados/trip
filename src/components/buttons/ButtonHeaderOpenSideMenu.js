import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonHeaderOpenSideMenu = ({ navigation }) => (
                                <View> 
                                    <TouchableOpacity style={{ paddingLeft: 15 }} onPress={()=>navigation.navigate('DrawerOpen')}>
                                        <Icon  name="ios-menu-outline" color="#FFFFFF" size={27}/>
                                    </TouchableOpacity> 
                                </View>
);

export { ButtonHeaderOpenSideMenu };