import { styles } from "./styles"
import { View, FlatList } from "react-native"
import { ProductItem } from "../../components/index"
import { PRODUCTS } from "../../constants/data/index"

const Products = ({ navigation, route }) => {

    const { categoryId } = route.params

    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId)

    const onSelected = (item) => {
        navigation.navigate("Product", { id: item.id, title: item.title })

    }

    const renderItem = ({ item }) => (<ProductItem item={item} onSelected={onSelected} />)

    return (
        <View style={styles.container}>
        <FlatList 
            style={styles.contentContainer}
            renderItem={renderItem}
            data={filteredProducts}
            keyExtractor={element => element.title.toString()}
        />
        </View>
    )
}
export default Products