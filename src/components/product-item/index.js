import { styles } from "./style";
import { View, Text, TouchableOpacity, Image } from "react-native";

const ProductItem = ({ item, onSelected }) => {

    const { title, price, description, pictureUrl } = item

    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.detailContainer}>
                    <Image style={styles.image} source={pictureUrl} />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.priceText}>$ {price}</Text>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>


    )

}

export default ProductItem