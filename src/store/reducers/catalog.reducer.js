import {catalogTypes } from "../types";

const {ADD_TO_CATALOG}= catalogTypes

const initialState ={
    token: null,
    userId: null,
    photo: null
}

const catalogReducer =(state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CATALOG:
            {
                return{
                    ...state,
                    token:action.token,
                    userId: action.userId,
                    photo: action.pickedUrl
                    
                }
            }
       

        default: return state    
    }
}

export default catalogReducer;