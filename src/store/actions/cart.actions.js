import { cartTypes } from '../types';
import { URL_BASE } from '../../constants/firebase/index';
import { formatDate } from '../../utils/functions';

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER, REMOVE_ORDER, INCREASE_CART, DECREASE_CART } = cartTypes;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const increaseCart =(id, quantityCart)=>({
type: INCREASE_CART,
id,
quantityCart
})

export const decreaseCart =(id, quantityCart)=>({
  type: DECREASE_CART,
  id,
  quantityCart
  })

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const confirmCart = (items, total, token, userId) => {
  const date= Date.now()
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: formatDate(date),
          items,
          total,
          token,
          userId,
        }),
      });
      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_ORDER,
        error,
      })
    }
  };
};

export const removeOrder =()=>({
  type: REMOVE_ORDER,
  
})
