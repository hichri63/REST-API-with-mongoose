import {GET_CONTACT} from './type'
import axios from 'axios'
   


export const getContacts = ()=>dispatch=>{
    axios.get('/api').then(res =>{
        dispatch({
            type: GET_CONTACT,
            payload:res.data
        })
    })
}
export const deleteContact = id => dispatch => {
    axios.delete(`/api/${id}`).then(() => {
      dispatch(getContacts());
    });
  };
  export const addContact = newContact => dispatch => {
    axios.post(`/api`, newContact).then(() => {
      dispatch(getContacts());
    });
  };
  export const updatedContact = (id, updatedContact) => dispatch => {
    axios.put(`/api/${id}`, updatedContact).then(() => {
      dispatch(getContacts());
    });
  };



