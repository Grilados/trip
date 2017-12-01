import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ButtonHeaderBack = () => (
    <View> 
        <TouchableOpacity style={{ paddingLeft: 15 }}>
            <Icon  name="ios-arrow-back" color="#FFFFFF" size={27}/>
        </TouchableOpacity> 
    </View>
);

export { ButtonHeaderBack };