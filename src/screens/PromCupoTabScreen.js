import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tab } from '../configs/Routes';
import { Header } from '../components';

export default class PromCupoTabScreen extends Component {  
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header openSideMenu={()=>navigate("DrawerOpen")} />
                <Tab />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
}); 