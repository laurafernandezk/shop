import { styles } from './styles';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, confirmCart, removeOrder } from '../../store/actions';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';
import { getNumber } from '../../utils/functions';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [view, setView] = useState(false);

  const onDelete = (id) => {
    dispatch(removeFromCart(id));
    setView(false);
  };

  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

  const onCreateOrder = () => {
    dispatch(confirmCart(cart, total,userId, token));
    setView(true);
  };

  const onDeleteOrder = () => {
    dispatch(removeOrder());
    setView(false);
  };

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <>
          <View style={styles.listContainer}>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={() => getNumber().toString()}
            />
          </View>
          <View style={styles.confirmContainer}>
            <TouchableOpacity onPress={onCreateOrder} disabled={cart.length === 0}>
              <Text style={styles.confirmText}>Confirm order: ${total}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="trash" size={22} color={colors.textDark} onPress={onDeleteOrder} />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {view ? 'Compra confirmada' : 'No hay productos en el carrito'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
