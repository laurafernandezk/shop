import { TouchableOpacity, View, Text } from "react-native";
import {styles} from "./styles"


const CategoryItem = ({item, onSelected})=>{
    return (
        <TouchableOpacity  onPress={()=>onSelected(item)} style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryItem