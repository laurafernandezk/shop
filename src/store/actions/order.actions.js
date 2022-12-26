import {orderTypes} from "../types"
import {URL_BASE} from "../../constants/firebase"

const {GET_ORDER, DELETE_ORDER}= orderTypes;

export const getOrder =()=>{
    return async(dispatch)=>{
        try {
            const response = await fetch (`${URL_BASE}/orders.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()

            const orders = Object.keys(data).map((key)=>({
                ...data[key],
                id:key,

            }))
            dispatch({
                type: GET_ORDER,
                orders,
            })
        } catch (error) {
            
        }
    }
}

export const deleteOrder =(id)=>{
    return async (dispatch)=>{
        try {
            const response = await fetch(`${URL_BASE}/orders/${id}.json`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })  
            const data = await response.json()
            dispatch({
                type: "DELETE_ORDER",
                id      
            })
        } catch (error) {
            console.log(error)
        }
    }

}
