import { styles } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../constants/themes/colors";

const CartItem = ({ onDelete, item }) => {

const { id, description, information, title, price, quantity}= item
console.warn(item)
    return (<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.contentContainer}>
        <View style={styles.detail}>
            <Text style={styles.text}>{price}</Text>
            <Text style={styles.text}>{description}</Text>
            <Text style={styles.text}>{information}</Text>
            <Text style={styles.text}>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={()=>onDelete(id)}>
            <Ionicons name="trash" size={22} color={colors.textDark} />
        </TouchableOpacity>
        </View>
    </View>)
}

export default CartItem
