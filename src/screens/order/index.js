import {styles} from "./styles";
import { View,FlatList } from "react-native"
import {OrderItem} from "../../components"
import {ORDERS} from "../../constants/data"

const Order =({navigation})=>{

    const renderItem=({item})=>(<OrderItem item={item} onDelete={onDelete}/>)

    const onDelete =()=>console.warn("trash")
   

    return(
        <View style={styles.container}>
            <FlatList
            data={ORDERS}
            renderItem={renderItem}
            keyExtractor={element=>element.id.toString}

            />
        
        </View>
    )
}

export default Order