import { styles } from "./styles";
import { FlatList} from "react-native";
import { CategoryItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {selectCategory} from "../../store/actions"
import { getNumber } from "../../utils/functions";

const Categories = ({ navigation }) => {

    const categories = useSelector((state)=>state.category.categories);

    const dispatch = useDispatch()

    const onSelected = (item) => { 
        dispatch(selectCategory(item.id))
        navigation.navigate("Products",{title:item.name})
    }

    const renderItem = ({ item }) =>
        <CategoryItem item={item} onSelected={onSelected} />
    return (

        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={() => getNumber().toString()}
            style={styles.container}
        />



    )


}
export default Categories