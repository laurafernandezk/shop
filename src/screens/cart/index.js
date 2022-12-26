import { styles } from './styles';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, confirmCart } from '../../store/actions';
import { useState } from 'react';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const [view, setView]= useState(true)

  const onDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  const onCreateOrder = () => {
    dispatch(confirmCart(cart, total))
    setView(!view)
  }

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <View style={styles.listContainer}>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={styles.confirmContainer}>
            <TouchableOpacity onPress={onCreateOrder} disabled={cart.length===0}>
              <Text>Confirm</Text>
              <Text>${total}</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : ( view ?
        <Text> No hay productos en el carrito</Text> :
        <Text> Compra confirmada</Text>
      )}
    </View>
  );
};

export default Cart;
