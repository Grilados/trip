import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions, 
         Image,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonWarning from '../components/buttons/ButtonWarning';
import ButtonDelete from '../components/buttons/ButtonDelete';

const { width } = Dimensions.get('window');

export default class Item extends Component {
    render() {

        switch (this.props.layout) {
            case "places":
                return(
                    <View style={styles.container}>
                        <Image style={styles.image} source={this.props.image} />
                        <View style={styles.info}>
                            <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                            <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                        </View>
                        <View style={styles.menu}>
                            <TouchableOpacity><Text style={styles.txtMenu}>Ver Mais</Text></TouchableOpacity>
                        </View>
                    </View>
                );
            case "trade":
                return(
                    <View style={styles.container}>
                        <Image style={styles.image} source={this.props.image} />
                        <View style={styles.info}>
                            <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                            <Text style={styles.phone}>{this.props.phone}</Text>
                            <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                        </View>
                        <View style={styles.km}>
                            <Badge
                                value="8,2 km"
                                textStyle={{ color: '#FFFFFF' }}
                                containerStyle={{ backgroundColor: '#7EB239' }}
                            />
                        </View>
                    </View>
                );  
            case "coupon":
                return(
                    <View style={styles.couponContainer}>
                        <View style={styles.couponOptions}>
                            <Image style={styles.couponImage} source={this.props.image} />
                            <View style={styles.couponInfo}>
                                <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                                <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                            </View>
                        </View>
                        
                        <View style={styles.couponOptions}>
                            <Text style={styles.cupomValidity}> Válido até 10/dez </Text>
                            <ButtonDelete  onClick={this.props.ButtonDeleteOnClick} value="Excluir" />
                            <ButtonWarning  onClick={this.props.ButtonWarningOnClick} value="CÓDIGO" />
                        </View>
                    </View>
                );
            case "couponTwo":
                return(
                    <View style={styles.couponTwoContainer}>
                        <Image style={styles.couponTwoImage} source={this.props.image} />
                        <View style={styles.couponTwoInfo}>
                            <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                            <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                        </View>
                        <View style={styles.iconTwoCoupon}>
                            <Icon  name="ios-arrow-forward" color="#CACBCE" size={25}/>
                        </View>
                    </View>
                );
        }
        
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        width,
        padding: 20,
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 220
    },
    menu : {
        position: 'absolute',
        right: 25,
        bottom: 18,
    },
    km : {
        position: 'absolute',
        top: 18,
        right: 25
    },

    image : {
        width: 90,
        height: 90,
        marginRight: 10
    },
    title : {
        fontSize: 20, 
        color: '#0F0F0F',
        fontWeight: 'bold'
    },
    content : {
        color: '#858585',
        fontSize: 16
    },

    txtMenu : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#82B43F'
    },

    couponContainer : {
        width: width-40,
        alignSelf: 'center',
        elevation: 3,
        borderColor: '#E6E6E6',
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    couponOptions : {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    couponImage : {
        width: 55,
        height: 55,
        marginRight: 10    
    },
    couponInfo : {
        justifyContent: 'flex-start',
        width: 220,
        marginRight: 10
    },
    cupomValidity : {
        color: '#EFB126'
    },
    

    couponTwoContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width,
        padding: 10,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },
    couponTwoImage : {
        width: 75,
        height: 75,
        marginRight: 10    
    },
    couponTwoInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: 220,
        marginRight: 10
    },
    iconTwoCoupon : {
        marginRight: 20  
    }
}); 