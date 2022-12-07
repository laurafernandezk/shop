import { styles } from "./style";
import { View, Text, TouchableOpacity } from "react-native";

const ProductItem = ({ item, onSelected }) => {

    const { title, price, description } = item

    return (
        
            <View style={styles.container}>
                <TouchableOpacity  style={styles.containerTouchable} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.priceText}>${price}</Text>
                <Text>{description}</Text>
                </TouchableOpacity>
            </View>    
       

    )
   
}

export default ProductItem