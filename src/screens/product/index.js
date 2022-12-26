import { styles } from "./styles";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductDetail } from "../../components";
import { addToCart } from "../../store/actions";

const Product = ({ navigation}) => {

    const dispatch = useDispatch()
    const product = useSelector((state)=>state.products.selected)
    const onAddToCart =()=>{
        dispatch(addToCart(product))
    }

    return (
        <View style={styles.container}>
            <ProductDetail item={product} onAddToCart={onAddToCart}/>
        </View>
    )
}
export default Product