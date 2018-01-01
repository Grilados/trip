import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    StyleSheet
} from 'react-native';
import { Header, Separator, FooterMenu } from "../../components";
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header openSideMenu={true} onClick={()=>navigate("DrawerOpen")} />

                <View style={styles.content}>
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('PontosTuristicos')}>
                        <View style={styles.iconItem}>
                            <Image style={styles.image} source={require('../../imgs/icons/principal-one.png')} resizeMode="contain" />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Pontos turísticos</Text>
                            <Text style={styles.contentItem}>Conheça os pontos que a cidade oferece</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={35} />
                        </View>
                    </TouchableOpacity>

                    <Separator />

                    <TouchableOpacity style={styles.item} onPress={()=>navigate('Promocoes')}>
                        <View style={styles.iconItem}>
                            <Image style={styles.image} source={require('../../imgs/icons/principal-two.png')} resizeMode="contain" />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Promoções</Text>
                            <Text style={styles.contentItem}>Conheça as promoções que as lojas podem ter</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={35}/>
                        </View>
                    </TouchableOpacity>

                    <Separator />
                    
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('Comercios')}>
                        <View style={styles.iconItem}>
                            <Image style={styles.image} source={require('../../imgs/icons/principal-three.png')} resizeMode="contain" />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Comércios</Text>
                            <Text style={styles.contentItem}>Encontre comércios e serviços mais próximos</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={35} />
                        </View>
                    </TouchableOpacity>

                    <Separator />
                </View>

                <FooterMenu />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content : {
        marginTop: 80,
        alignItems: 'center'
    },
    item : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    iconItem : {
        width: 85,
        height: 55,
        marginRight: 10        
    },
    image : {
        width: 85,
        height: 65
    },
    infoItem : {
        flexDirection: 'column',
        width: width-150,
        marginRight: 10
    },
    titleItem : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#587D1C'
    },
    contentItem : {
        fontSize: 16,
        color: '#8D8D8D'
    }
});