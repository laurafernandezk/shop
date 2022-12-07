import { View, Text, Image } from "react-native";
import { styles } from "./styles"

const ProductDetail = ({ item }) => {

    const {title, price, description, information} = item || {}

    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        </View>
        <Image  style ={styles.image} source= {item.pictureUrl}/>
        <View style={styles.priceContainer}>
        <Text style={styles.priceText}>Precio: ${price}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{description}</Text>
        <Text style={styles.detailText}>{information}</Text>
        </View>
        <Image />
    </View>)
}

export default ProductDetail