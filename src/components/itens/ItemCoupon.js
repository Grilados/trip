import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions, 
         Image,
         StyleSheet 
} from 'react-native';
import { ButtonWarning, ButtonDelete } from '../index';

const { width } = Dimensions.get('window');

class ItemCoupon extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.options}>
                    <Image style={styles.image} source={this.props.image} />
                    <View style={styles.info}>
                        <Text style={styles.title} numerOfLines={1}>{this.props.title}</Text>
                        <Text style={styles.content} numerOfLines={2}>{this.props.content}</Text>
                    </View>
                </View>      

                <View style={styles.footer}>        
                    <Text style={styles.validity}> Válido até 10/dez </Text> 
                    <View style={styles.buttons}>
                        <ButtonDelete value="EXCLUIR" />
                        <ButtonWarning onClick={this.props.ButtonWarningOnClick} value="CÓDIGO" />
                    </View>
                </View>     
            </View>
        );
    }
}

export { ItemCoupon };

const styles = StyleSheet.create({
    container : {
        width: width-40,
        alignSelf: 'center',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    options : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 220,
        marginLeft: 10,
        marginRight: 10
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
        marginTop: 10,
        marginRight: 10    
    },
    info : {
        justifyContent: 'flex-start',
        marginTop: 10,
        marginRight: 10
    },
    footer : {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10
    },
    buttons : {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    validity : {
        flex: 1,
        color: '#EFB126',
        fontSize: 12,
        marginLeft: 10
    }
}); 