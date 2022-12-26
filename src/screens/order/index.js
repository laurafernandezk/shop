import { styles } from './styles';
import { View, FlatList } from 'react-native';
import { OrderItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import {getOrder, deleteOrder} from "../../store/actions"


const Order = ({ navigation }) => {

  const dispatch = useDispatch()  
  const orders = useSelector((state)=>state.order.list)  

  useFocusEffect(
    useCallback(()=>{
        dispatch(getOrder())
  },[dispatch])
    )
    
  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;

  const onDelete = (id) => {
    dispatch(deleteOrder(id))
}

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(element) => element.id.toString}
      />
    </View>
  );
};

export default Order;
