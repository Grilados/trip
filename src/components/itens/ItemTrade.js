import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions, 
         Image,
         StyleSheet 
} from 'react-native';
import { Badge } from 'react-native-elements';

const { width } = Dimensions.get('window');

class ItemTrade extends Component {
    render() {
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
    }
}

export { ItemTrade };

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
    km : {
        position: 'absolute',
        top: 20,
        right: 20
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
    phone : {
        fontSize: 14,
        paddingBottom: 3,
        fontWeight: '500',
        color: '#000000'
    },
    content : {
        color: '#858585',
        fontSize: 14
    }
}); 