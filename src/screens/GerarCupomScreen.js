import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet
} from 'react-native';
import { ItemCouponSimple, ButtonWarning, ButtonCancel } from '../components';

export default class GerarCupomScreen extends Component {   
    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                
                <ItemCouponSimple
                    image={require('../imgs/starbucks.jpg')}
                    title="Starbucks"
                    content="Promoção imperdível, compre um e leve outro, confira!" 
                />

                <View style={styles.contentContainer}>
                    <Image style={styles.image} source={require('../imgs/starbucks.jpg')} />
                    <Text style={styles.title}> Gerar Cupom </Text>
                    <Text style={styles.content}> Tem certeza que deseja salvar este cupom ? </Text>
                    
                    <View style={styles.button}>
                        <ButtonWarning  value="SALVAR" />
                    </View>
                    <View style={styles.button}>
                        <ButtonCancel style={styles.button} value="CANCELAR" />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contentContainer : {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        width: 130,
        height: 130,   
        borderRadius: 50 
    },
    title : {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000'
    },
    content : {
        fontSize: 18,
        color: '#000000'    
    },
    button : {
        marginTop: 10
    }
}); 