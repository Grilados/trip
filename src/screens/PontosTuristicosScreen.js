import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Header, ItemChoice, List, ItemPlace } from '../components';

const { height } = Dimensions.get('window');

// Helpers 
import { ITENS, CHOICES } from '../helpers/PontosTuristicosHelper';

export default class PontosTuristicosScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChoice: 'Cachoeiras'
        }
    }
    
    _renderItem({item}) {
        return(  
            <View>               
                <ItemPlace
                    image={item.image}
                    title={item.title}
                    content={item.content} 
                />  
            </View>
        );
    }

    _selectedItem(selectedItem) {
        let { name } = selectedItem.item;
        this.setState({currentChoice: name});
    }

    render() {
        const { navigate, goBack } = this.props.navigation;
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor='#7EB239' />
                <Header onClick={()=>goBack()} />
                
                <View style={styles.content}>
                    <ItemChoice 
                        currentChoice={this.state.currentChoice}
                        selectedItem={(selectedItem)=>this._selectedItem(selectedItem)}
                        choices={CHOICES}
                    />

                    <List 
                        itens={ITENS} 
                        renderItem={(item)=> this._renderItem(item)}
                        containerStyle={styles.containerStyle}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {   
        backgroundColor: '#FFFFFF'
    },
    content: {
        marginTop: 60
    },

    containerStyle : {
        height: height-135,    
    }
});
