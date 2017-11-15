import React, { Component } from 'React';
import { FlatList, RefreshControl } from 'react-native';

export default class ListItem extends Component {
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
            />
        )
    }
}