import {authTypes} from "../types";
import {AUTH_SING_IN, AUTH_SING_UP} from "../../constants/firebase";
const {SING_UP, SING_IN} = authTypes;

export const singUp = (email, password) =>{
    return async (dispatch)=>{
        try {
            const response = await fetch (AUTH_SING_UP, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
            
        })
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const data = await response.json();

        dispatch({
            type:SING_UP,
            token: data.idToken,
            userId: data.localId

        })
    } catch (error) {
        throw error 
            
        }
    }
}

export const singIn = (email, password) =>{
    return async (dispatch)=>{
        try {
            const response = await fetch (AUTH_SING_IN, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify({
                        email,
                        password,
                        returnSecureToken: true
                    })
            
        })
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const data = await response.json();

        dispatch({
            type:SING_IN,
            token: data.idToken,
            userId: data.localId

        })
    } catch (error) {
        throw error 
            
        }
    }
}