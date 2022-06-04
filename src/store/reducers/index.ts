import { userState } from './../../types/user';
import { combineReducers } from "redux";
import userReducer from "./userReducer";


interface AppState{
  user:userState;
  categories:any;
  records:any;
}



const rootReducer = combineReducers({
  user:userReducer,
  categories:()=>{},
  records:()=>{}
})

export default rootReducer;