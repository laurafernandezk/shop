import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../constants/themes/colors";
import {formatDate} from "../../utils/functions"

const OrderItem = ({ item, onDelete }) => {
    return (
    <View style={styles.container}>
        <View style= {styles.headerContainer}>
            <Text>{formatDate(item.date)}</Text>
            <Text>Total:{item.total}</Text>
        </View>
        <View style= {styles.container}>
            <TouchableOpacity onPress={()=>onDelete(item.id)}>
                <Ionicons name="trash" size={24} color={colors.textDark} />
            </TouchableOpacity>
        </View>
    </View>)
}

export default OrderItem;