import { styles } from './styles';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';
import { formatDate } from '../../utils/functions';

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Fecha: {formatDate(item.date)}</Text>
        <Text style={styles.text}>Total: $ {item.total}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={colors.textDark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
