import {catalogTypes } from "../types";

const {ADD_TO_CATALOG, LOAD_CATALOG}= catalogTypes

const initialState ={
    token: null,
    userId: null,
    photo: null,
    idDb: null
}

const catalogReducer =(state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CATALOG:
            {
                return{
                    ...state,
                    token:action.token,
                    userId: action.userId,
                    photo: action.pickedUrl,
                    idDb: action.idDb
                    
                }
            }
        case LOAD_CATALOG:{
            return{
                ...state,
                photo: action.photo.map((item)=>{
                    return{
                        photo:item.photo,
                        idDb: item.idDb

                }})

            }
            
        }    
        default: return state    
    }
}

export default catalogReducer;