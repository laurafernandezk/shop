import { styles } from "./styles"
import { View, FlatList } from "react-native"
import { ProductItem } from "../../components/index"
import { useSelector, useDispatch } from "react-redux";
import {filterProducts, selectProduct } from "../../store/actions"
import { useEffect } from "react";



const Products = ({ navigation}) => {

    const category = useSelector((state)=>state.category.selected);
    const filteredProducts = useSelector((state)=>state.products.filteredProducts);
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(filterProducts(category.id))
    },[])

    const onSelected = (item) => {
        navigation.navigate("Product", {title: item.title })
        dispatch(selectProduct(item.id))
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