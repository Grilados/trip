import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions, 
         Image,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';

const { width } = Dimensions.get('window');

class ItemPlace extends Component {
    render() {
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
    }
}

export { ItemPlace };

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
    image : {
        width: 90,
        height: 90,
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
    txtMenu : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#82B43F'
    }
}); 