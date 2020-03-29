
import {GET_CONTACT} from '../actions/type'

const ContactReducer = (state = [], action)=>{
    switch(action.type) { 
        case GET_CONTACT:
            return action.payload;
            default:
      return state;
            
    
    
    }
      
}
export default ContactReducer;