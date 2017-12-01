import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    StyleSheet
} from 'react-native';
import { Header } from "../../components";
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header openSideMenu={()=>navigate("DrawerOpen")} />

                <View style={styles.content}>
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('PontosTuristicos')}>
                        <View style={styles.iconItem}>
                            <Icon  name="ios-albums" color="#7EB239" size={85}/>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Pontos turísticos</Text>
                            <Text style={styles.contentItem}>Conheça os pontos turísticos que a cidade oferece</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={50}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('OndeDormir')}>
                        <View style={styles.iconItem}>
                            <Icon  name="ios-albums" color="#7EB239" size={85}/>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Onde Dormir</Text>
                            <Text style={styles.contentItem}>Descubra a melhor opção de estadia na cidade</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={50}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={()=>navigate('Comercios')}>
                        <View style={styles.iconItem}>
                            <Icon  name="ios-albums" color="#7EB239" size={85}/>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.titleItem}>Comércios</Text>
                            <Text style={styles.contentItem}>Encontre comércios e serviços mais próximos</Text>
                        </View>
                        <View>
                            <Icon  name="ios-arrow-forward" color="#7EB239" size={50}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    content : {
        marginTop: 60,
    },
    item : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    iconItem : {
        marginRight: 20        
    },
    infoItem : {
        flexDirection: 'column',
        width: width-150,
    },
    titleItem : {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#587D1C'
    },
    contentItem : {
        fontSize: 18,
        color: '#8D8D8D'
    }
});