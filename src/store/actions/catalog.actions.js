import { catalogTypes } from "../types";
import { URL_BASE } from '../../constants/firebase/index'
const {ADD_TO_CATALOG, LOAD_CATALOG}= catalogTypes;
import { insertIntoDb, getFromDb } from "../../db";

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

        const responseDb = await insertIntoDb(photo)
        console.log(responseDb.insertId)
        
        dispatch({
          type: ADD_TO_CATALOG,
          result,
          photo,
          idDb: responseDb.insertId
        });
      } catch (error) {
        dispatch({
          type: ADD_TO_CATALOG,
          error,
        })
      }
    };
  };

  export const loadPhoto = () => {
    return async (dispatch) => {
      try {
        const response = await getFromDb()
        dispatch({
          type: LOAD_CATALOG,
          photo: response?.rows?._array
        });
      } catch (error) {
        throw error
      }
    };
  };



