import { View, Text, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const ProductDetail = ({ item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const { title, price, description, information, pictureUrl, stock } = item || {};
  const [storeStock, setStoreStock] =useState(stock)
  const onAdd = () => {
    if (quantity < stock && storeStock>=1) {
      setQuantity(quantity + 1);
      setStoreStock(storeStock-1)
    }
  };
  const onDiscount = () => {
    if (quantity >= 0 && storeStock<stock) {
      setQuantity(quantity - 1)
    setStoreStock(storeStock + 1)
  }};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image style={styles.image} source={pictureUrl} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Precio: ${price}</Text>
          <Text style={styles.detailText}>Stock: {storeStock}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>{description}</Text>
          <Text style={styles.detailText}>{information}</Text>
        </View>
        <View style={styles.handlerContainer}>
          <TouchableOpacity onPress={onDiscount} disabled={stock === 0}>
            <Ionicons
              name="remove-circle-outline"
              size={30}
              color={stock === 0 ? colors.disabled : colors.textDark}
            />
          </TouchableOpacity>
          <Text
            style={
              stock === 0 ? { ...styles.handlerText, color: colors.disabled } : styles.handlerText
            }>
            {quantity}
          </Text>
          <TouchableOpacity onPress={onAdd} disabled={stock === 0}>
            <Ionicons
              name="add-circle-outline"
              size={30}
              color={stock === 0 ? colors.disabled : colors.textDark}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Add to Cart"
            onPress={() => onAddToCart(quantity)}
            color={stock === 0 ? colors.disabled : colors.backgroundPrimaryDark}
            disabled={stock === 0|| quantity===0}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
