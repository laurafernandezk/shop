import {authTypes} from "../types";

const {SING_IN, SING_UP} = authTypes;

const initialState={
    token: null,
    userId: null
}

const authReducer =(state=initialState, action)=>{
    switch(action.type){
        case SING_UP:
            return{
              ...state,
              token: action.token,
              userId:action.userId   
            }
        case SING_IN:
            return{
                ...state,
                token: action.token,
                userId:action.userId   
              }
        default:
             return state
    }

}
export default authReducer;