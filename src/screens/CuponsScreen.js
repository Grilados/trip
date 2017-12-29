import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    Modal,
    Dimensions,
    StyleSheet
} from 'react-native';
import { List, ItemCoupon, GerarCupom } from '../components';

const { width, height } = Dimensions.get('window');

// Helpers 
import { ITENS } from '../helpers/CuponsHelper';

export default class CuponsScreen extends Component {   
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }
    static navigationOptions = {
        tabBarLabel: 'Cupons',
    };

    renderGerarCupom() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.openModal}
                onRequestClose={()=>this.setState({openModal: false})}>
                    <View style={styles.modal}>
                        <GerarCupom 
                            save={()=>this.setState({openModal: false})}
                            cancel={()=>this.setState({openModal: false})}
                        />
                    </View>
            </Modal>
        );
    }

    _renderItem({item}) {
        return(  
            <View style={styles.item}>
                <ItemCoupon
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                    ButtonDeleteOnClick={()=>alert('delete')}
                    ButtonWarningOnClick={()=>this.setState({openModal: true})}
                />
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                     
                <List 
                    itens={ITENS} 
                    renderItem={(item)=> this._renderItem(item)}
                    ListHeaderComponent={()=><View style={styles.separator} />}
                    ListFooterComponent={()=><View style={styles.separator} />}
                />

                {this.renderGerarCupom()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    separator : {
        height: 15
    },
    item : {
        marginTop: 10,
        marginBottom: 5
    },
    modal : {
        width,
        height,
        backgroundColor: 'red'
    }
}); 