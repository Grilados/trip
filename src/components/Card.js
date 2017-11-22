import React, { Component } from 'react';
import { View, 
         Text, 
         Image,
         Dimensions,
         StatusBar, 
         StyleSheet 
} from 'react-native';
import { Badge } from 'react-native-elements';

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
                    <Image style={styles.itemImage} source={require('../imgs/starbucks.jpg')} />
                    <View style={styles.itemInfo}>
                        <Text style={styles.title} numerOfLines={1}>Starbucks</Text>
                        <Text style={styles.content} numerOfLines={2}>Promoção imperdível, compre um e leve outro, confira!</Text>
                        <Text style={styles.contentTwo} numerOfLines={3}>Compre 1 Cookies & Cream Frappuccino e leve outro grátis. Promoção válida de segunda a quarta até as 12:00h.</Text>
                    </View>
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
        top: 18,
        elevation: 3,
        right: 25
    },
    item : {
        flexDirection: 'row',
        width: width-40,
        paddingTop: 15,
        paddingLeft: 10,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },
    itemImage : {
        width: 75,
        height: 75,
        marginRight: 10,
        backgroundColor: 'red'
    },

    itemInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 330,
        marginRight: 10
    },
    title : {
        fontSize: 20, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    },
    content : {
        color: '#858585',
        fontSize: 18
    },
    contentTwo : {
        marginTop: 10,
        paddingBottom: 15,
        color: '#7EB239',
        fontSize: 22   
    }
});