import React, { Component } from 'React';
import { View, 
         Text, 
         Dimensions,
         Modal,
         TouchableOpacity,
         StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class ItemChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    renderModal() {
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.openModal}
                onRequestClose={()=>this.setState({ openModal: false })}
            >   
                <View style={styles.content}>
                    {this.renderItems()}
                </View>
            </Modal>
        );   
    }

    renderItems() {
        return this.props.choices.map((item, i)=>{
            return(
                <TouchableOpacity 
                    key={i} 
                    style={styles.selectChoice}
                    onPress={()=>this.selectItem(item, i)}
                >
                    <Text style={styles.choice}>{item.name}</Text>
                </TouchableOpacity>
            );
        });
    }

    selectItem(item, i) {
        let selectedItem = { index: i, item };
        this.props.selectedItem(selectedItem);
        this.setState({ openModal: false })
    }

    render() {
        return( 
            <View>
                <TouchableOpacity style={styles.container} onPress={()=>this.setState({ openModal: true })}>
                    <Text style={styles.choice}>{this.props.currentChoice}</Text>
                    <TouchableOpacity style={styles.containerIndicator} onPres={()=>this.setState({ openModal: true })}>
                        <Icon  name="ios-arrow-down" color="#0C101F" size={27}/>
                    </TouchableOpacity>
                </TouchableOpacity>

                {this.renderModal()}
            </View>
        );
    }
}

export { ItemChoice };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width,
        padding: 15,
        backgroundColor: '#FFFFFF',
        elevation: 5
    },
    choice : {
        fontSize: 18,
        color: '#0F0F0F',
        marginLeft: 4
    },
    selectChoice : {
        paddingVertical: 10,
        marginLeft: 20,
        marginRight: 20,
        borderColor: '#E3E3E3',
        borderBottomWidth: 0.5
    },
    content : {
        width,
        paddingVertical: 5,
        position: 'absolute',
        bottom: 0,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },
    containerIndicator : {
        position: 'absolute',
        right: 20,
        top: 15
    }
});