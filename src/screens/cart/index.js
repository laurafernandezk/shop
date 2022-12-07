import {styles} from "./styles"
import { View, Text, FlatList, TouchableOpacity  } from "react-native"
import {CartItem} from "../../components/index"
import { CART } from "../../constants/data/cart"
import { useState } from "react"

const Cart =()=>{
     
   const [cartItems, setCartItems] = useState(CART)
   const renderItem =({item})=>(<CartItem item={item} onDelete={onDelete}/>)

    const onDelete =(id)=>{
    
        setCartItems(prevCartItems => prevCartItems.filter(element=> element.id != id))

    }
    const onConfirm=()=>console.warn("compra confirmada")
   
   
    return(
        <View style={styles.container}>
        <View style={styles.listContainer}>
        <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item=>item.id.toString()}/>
        </View>
        <View style={styles.confirmContainer}>
            <TouchableOpacity onPress={onConfirm}>
                <Text>Confirm</Text>
                <Text>Total: 12000  </Text>

            </TouchableOpacity>


        </View>
        </View>
    )
}

export default Cart