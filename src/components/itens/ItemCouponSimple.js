import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions, 
         Image,
         StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

class ItemCouponSimple extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.image} />
                <View style={styles.info}>
                    <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                    <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                </View>
                <View style={styles.icon}>
                    <Icon  name="ios-arrow-forward" color="#CACBCE" size={25}/>
                </View>
            </View>
        ); 
    }
}

export { ItemCouponSimple };

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        padding: 10,
        elevation: 2,
        backgroundColor: '#FFFFFF'
    },
    title : {
        fontSize: 18,
        lineHeight: 15,
        paddingBottom: 3, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    },
    content : {
        color: '#858585',
        fontSize: 14
    }, 
    image : {
        width: 55,
        height: 55,
        marginRight: 10    
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 220,
        marginRight: 10
    },
    icon : {
        marginLeft: 20  
    }
}); 