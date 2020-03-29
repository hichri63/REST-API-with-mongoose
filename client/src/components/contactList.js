import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getContacts,deleteContact,addContact,updatedContact} from "../actions/ContactAction";
import ModalComp from "./Mymodule";


class Contacts extends Component{
  componentDidMount(){
    this.props.getContacts()
  }
    render(){
        return (
            <div>
                {this.props.Contacts.map(el => (
          <div className="box">
            <h4>{el.name}</h4>
            <h4>{el.Num_tel}</h4>
            <h4>{el.Email}</h4>
            <button
              onClick={() => {
                this.props.deleteContact(el._id);
                alert("contact deleted");
              }}
            >
              delete
            </button>
            <ModalComp editMode={true} contactToUpdate={el} />
          </div>
        ))}
           
           
        
        </div>
        )
        
    }
    
}
const mapStateToPropes = state => {
    return {
        Contacts:state.ContactReducer

    };
};
export default connect(mapStateToPropes,{getContacts,deleteContact,addContact,updatedContact})(Contacts)