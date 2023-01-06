import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';
import { useDispatch } from 'react-redux';
import { increaseCart, decreaseCart } from '../../store/actions';

const CartItem = ({ item, onDelete }) => {
  const { title, price, quantity, id} = item;
  const dispatch = useDispatch();

  const setPrice = price * quantity;

  const onAdd = () => {
    dispatch(increaseCart(id, quantity));
  };

  const onDiscount = () => {
    dispatch(decreaseCart(id, quantity));
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.detail}>
          <View style={styles.handleContainer}>
            <TouchableOpacity onPress={onDiscount}>
              <Ionicons name="remove-circle-outline" size={27} color={colors.textDark} />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={onAdd}>
              <Ionicons name="add-circle-outline" size={27} color={colors.textDark} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Precio: ${setPrice} </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="trash" size={22} color={colors.textDark} onPress={() => onDelete(id)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
