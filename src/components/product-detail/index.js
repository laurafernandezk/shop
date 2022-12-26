import { View, Text, Image, Button } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles"

const ProductDetail = ({ item, onAddToCart }) => {

    const {title, price, description, information, pictureUrl} = item || {}

    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        </View>
        <Image  style ={styles.image} source= {pictureUrl}/>
        <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Precio: ${price}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{description}</Text>
        <Text style={styles.detailText}>{information}</Text>
        </View>
        <View>
            <Button 
            title = "Add to Cart"
            onPress ={onAddToCart}
            color= {colors.backgroundPrimaryDark}/>
        </View>
    </View>)
}

export default ProductDetail