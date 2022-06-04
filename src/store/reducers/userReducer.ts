import { User, UserAction, userState } from "../../types/user";


const defaultState: userState = {
  data:{} as User,
  loading:false,
  error:""
}


const userReducer = (state:userState=defaultState,action:UserAction)=>{ 
  return state;
}
export default userReducer;