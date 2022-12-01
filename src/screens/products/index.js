import {styles} from "./styles"
import { View, Text, Button } from "react-native"

const Products = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text> Products</Text>
            <Button title="Go to Product" color="#F2A541" onPress={() => navigation.navigate("Product")}/>
        </View>
    )
}
export default Products