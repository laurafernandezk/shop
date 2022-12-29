import { catalogTypes } from "../types";
import { URL_BASE } from '../../constants/firebase/index'
const {ADD_TO_CATALOG}= catalogTypes

export const addToCatalog = (token, userId, photo) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL_BASE}/catalog.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           token,
           userId,
           photo
          }),
        });
        const result = await response.json();
  
        dispatch({
          type: ADD_TO_CATALOG,
          result,
        });
      } catch (error) {
        dispatch({
          type: ADD_TO_CATALOG,
          error,
        })
      }
    };
  };