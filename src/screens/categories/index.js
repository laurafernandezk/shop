import { styles } from "./styles"
import { View, Text, Button } from "react-native"

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text> Catergories</Text>
            <Button title="Go to Products" color="#F2A541" onPress={() => navigation.navigate("Products")} />
        </View>
    )
}
export default Categories