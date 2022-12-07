import { styles } from "./styles"
import { View, FlatList, Button, Text } from "react-native"
import { CATEGORIES } from "../../constants/data/index"
import { CategoryItem } from "../../components"

const Categories = ({ navigation }) => {

    const onSelected = (item) => { 
        navigation.navigate("Products",{categoryId: item.id, title:item.name})

    }

    const renderItem = ({ item }) =>
        <CategoryItem item={item} onSelected={onSelected} />
    return (

        <FlatList
            data={CATEGORIES}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.container}
        />



    )


}
export default Categories