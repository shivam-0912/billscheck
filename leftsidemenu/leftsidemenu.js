import React, { Component} from 'react';
import './leftsidemenu.css'
import ListItem from './listitem';
import { connect } from 'react-redux';
import axios from 'axios';

class LeftSideMenu extends Component{
    state = {
        items: []
    }

    componentDidMount () {
        
        axios.get( '/'+this.props.user_id+'/items' )
            .then( response => {
                const items = response.data.slice(0, 4);
                
                this.setState({items:items});
                
            } )
            .catch(error => {
                console.log(error);
                
            });
    }
    render(){
        return <div className="leftsidemenu">
            <div className="list">
            <ListItem name="Refrigerator" item="1" ></ListItem>
            <ListItem name="Washing Machine" item="2"></ListItem>
            <ListItem name="Television" item="3"></ListItem>
            <ListItem name="AC"></ListItem>
            <ListItem name="Refrigerator"></ListItem>
            <ListItem name="Washing Machine"></ListItem>
            <ListItem name="Television"></ListItem>
            <ListItem name="AC"></ListItem>
            <ListItem name="Refrigerator"></ListItem>
            <ListItem name="Washing Machine"></ListItem>
            <ListItem name="Television"></ListItem>
            <ListItem name="AC"></ListItem>
            <ListItem name="Refrigerator"></ListItem>
            <ListItem name="Washing Machine"></ListItem>
            <ListItem name="Television"></ListItem>
            <ListItem name="AC"></ListItem>
            </div>
        </div>
    }


}
const mapStateToProps = state => {
    return {

        item_id: state.item_id,
        user_id:state.user_id,
    }
};


export default connect(mapStateToProps)(LeftSideMenu);