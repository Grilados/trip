import React, { Component } from 'React';
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        setTimeout(()=>{ 
            this.setState({refreshing: false}); 
        }, 1000);   
    }

    render() {
        return( 
            <View style={this.props.containerStyle}>
                <FlatList 
                    data={this.props.itens}
                    keyExtractor={item=>item.id}
                    renderItem={(item)=>this.props.renderItem(item)}
                    showsVerticalScrollIndicator={this.props.showsVerticalScrollIndicator}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this._onRefresh()}
                        />
                    }
                    ListHeaderComponent={this.props.ListHeaderComponent}
                    ListFooterComponent={this.props.ListFooterComponent}
                />
            </View>
        );
    }
}

export { List };