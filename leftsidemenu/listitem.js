import React, { Component } from 'react';
import './listitem.css'
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';
class ListItem extends Component{
    constructor(props) {//this is used to initilize somethig like state at the create of component
        super(props);//to pass the props 
      
      }
    render(){
        return <div className="listitem" onClick={()=>this.props.updateitem(this.props.item)}>
            {this.props.name}
            {/* {this.props.item} */}
            
        </div>
    }


}


const mapStateToProps = state => {
    return {

        item_id: state.item_id,
        user_id:state.user_id,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    
                updateitem:(id)=> dispatch({type:actionTypes.UPDATE_ITEM,id:id})
                
       
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);