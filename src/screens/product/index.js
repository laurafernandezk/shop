import { styles } from "./styles";
import { View } from "react-native";
import { PRODUCTS } from "../../constants/data/products";
import { ProductDetail } from "../../components";

const Product = ({ navigation, route }) => {

    const { id } = route.params

    const filteredProduct = PRODUCTS.find((product) => product.id === id)

    return (
        <View style={styles.container}>
            <ProductDetail item={filteredProduct} />
        </View>
    )
}
export default Product