
import {sumTotal} from "../../utils/functions"
import {cartTypes} from "../types";
const {ADD_TO_CART, REMOVE_FROM_CART,CONFIRM_ORDER, REMOVE_ORDER, INCREASE_CART, DECREASE_CART}= cartTypes;


const initialState ={
    items: [],
    total: 0,
    error: null,
    token: null,
    userId: null,
}

const cartReducer = (state = initialState, action)=>{
   switch(action.type){
    case ADD_TO_CART:
    let updatedCart =[];
    if(state.items.find(item=>item.id=== action.item.id)){
        updatedCart = state.items.map(item=>{
            if(item.id===action.item.id) item.quantity +=action.item.quantity;
            return item;
        })
    } else{
        const item ={...action.item};
        updatedCart= [...state.items, item]
    }
    return{...state,
           items : updatedCart,
           total: sumTotal(updatedCart)
        }
    case  REMOVE_FROM_CART:
        const filteredCart= state.items.filter((item)=>item.id !== action.id);
        return{
            ...state,
            items: filteredCart,
            total: sumTotal(filteredCart)
        }
    case CONFIRM_ORDER:
        if(action.result){
            
            return{
                ...state,
                items: [],
                total: 0,
            }
            }
        return {
            ...state,
            error: action.error
        }
    case REMOVE_ORDER:
        return{
            items: [],
            total: 0,
            error: null
        }
    case INCREASE_CART:
        let setedCart =[];
    if(state.items.find(item=>item.id=== action.id)){
        setedCart = state.items.map(item=>{
            if(item.id===action.id && item.stock>item.quantity) item.quantity += 1;
            return item;
        })
    }
    return{...state,
           items : setedCart,
           total: sumTotal(setedCart)

           
        }
        case DECREASE_CART:
            let newCart =[];
        if(state.items.find(item=>item.id=== action.id)){
            newCart = state.items.map(item=>{
                if(item.id===action.id && item.quantity>1) item.quantity -= 1;
                return item;
            })
        }
        return{...state,
               items : newCart,
               total: sumTotal(newCart)  
            }
    
    default: return state
   }
}

export default cartReducer