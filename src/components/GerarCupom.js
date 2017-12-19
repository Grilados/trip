import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet
} from 'react-native';
import { ItemCouponSimple, ButtonWarning, ButtonCancel } from './index';

class GerarCupom extends Component {   
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
                    <Text style={styles.content}>Tem certeza que deseja salvar este cupom ?</Text>
                    
                    <View style={styles.button}>
                        <ButtonWarning  
                            fontSize={16}
                            containerStyle={{ width: 90, height: 30 }}
                            value="SALVAR" 
                            onClick={this.props.save}
                        />
                    </View>
                    <View style={styles.button}>
                        <ButtonCancel 
                            style={styles.button} 
                            fontSize={12}
                            value="CANCELAR" 
                            onClick={this.props.cancel}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export { GerarCupom };

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contentContainer : {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        width: 110,
        height: 110,   
        borderRadius: 50,
        marginBottom: 10
    },
    title : {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000'
    },
    content : {
        width: 280,
        fontSize: 20,
        textAlign: 'center',
        color: '#555964',
        marginBottom: 15
    },
    button : {
        marginTop: 15
    }
}); 