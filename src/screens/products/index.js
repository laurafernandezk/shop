import { styles } from "./styles"
import { View, FlatList } from "react-native"
import { ProductItem } from "../../components/index"
import { useSelector, useDispatch } from "react-redux";
import {filterProducts} from "../../store/actions"
import { useEffect } from "react";

const Products = ({ navigation}) => {

    const category = useSelector((state)=>state.category.selected);
    const filteredProducts = useSelector((state)=>state.products.filteredProducts);
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(filterProducts(category.id))
    },[])

    

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