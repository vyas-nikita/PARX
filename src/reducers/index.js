import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
// import EncryptionReducer from './encryptionReducer';


export default combineReducers({
    auth: AuthReducer,
    // encryption:EncryptionReducer
});