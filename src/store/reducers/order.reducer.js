
import { orderTypes } from "../types";
const {GET_ORDER, DELETE_ORDER}= orderTypes

const initialState ={
    list: [],
}

const orderReducer =(state = initialState, action)=>{
    switch(action.type){
        case GET_ORDER:
            {
                return{
                        ...state,
                        list: action.orders
                    }
            }
        case DELETE_ORDER:
            return{
                ...state,
                list: state.list.filter((order)=>order.id !== action.id)
            }

        default: return state    
    }
}

export default orderReducer;
