import React, { Component } from 'react';
import { View, 
         Text, 
         Image,
         Dimensions,
         StatusBar, 
         StyleSheet 
} from 'react-native';
import { Badge } from 'react-native-elements';
import { ButtonWarning } from './index';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class Card extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('../imgs/starbucksbanner.jpg')} />
                <View style={styles.km}>
                    <Badge
                        value="8,2 km"
                        textStyle={{ color: '#FFFFFF' }}
                        containerStyle={{ backgroundColor: '#7EB239' }}
                    />
                </View>
                
                <View style={styles.item}>
                    <View style={styles.info}>
                        <Image style={styles.itemImage} source={require('../imgs/starbucks.jpg')} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.title} numerOfLines={1}>Starbucks</Text>
                            <Text style={styles.content} numerOfLines={2}>Promoção imperdível, compre um e leve outro, confira!</Text>
                        </View>
                    </View>

                    <View style={styles.itemInfoTwo}>
                        <Text style={styles.titleTwo} numerOfLines={3}>Compre 1 Cookies & Cream e leve outro grátis. Promoção válida de segunda a quarta até as 12:00h.</Text>             

                        <View style={styles.footer}> 
                            <Text style={styles.contentTwo} numerOfLines={2}>
                                <Icon  name="ios-pin" color="#000000" size={12} containerStyle={{ marginBottom: 10 }} />  R. Alameda Joaquim Eugênio de Lima, 1023 Jd. Paulista, São Paulo/SP        
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.tools}>
                    <ButtonWarning buttonStyle={{ height: 30 }} value="CUPOM" />
                </View>
            </View>
        );
    }
}

export { Card };

const styles = StyleSheet.create({
    container : {
        width: width-40
    },
    image : {
        width: width-40,
        height: width/2-20
    },
    km : {
        position: 'absolute',
        top: 10,
        elevation: 3,
        right: 10
    },
    item : {
        width: width-40,
        paddingTop: 10,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#FFFFFF'
    },
    itemImage : {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    info : {
        flexDirection: 'row',
    },

    itemInfo: {
        flexDirection: 'column',
        width: 220,
        marginRight: 10
    },
    title : {
        fontSize: 18, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    },
    content : {
        color: '#858585',
        fontSize: 14
    },

    itemInfoTwo : {
        paddingLeft: 10,
        paddingBottom: 10,  
        width: 300,
    },
    titleTwo : {
        color: '#7EB239',
        fontSize: 18   
    },
    contentTwo : {
        paddingBottom: 20,
        color: '#858585',
        fontSize: 14
    },

    footer : {
        marginTop: 5
    },
    tools: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: -15
    }
});