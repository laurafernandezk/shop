import {styles} from "./styles"
import { View, Image } from "react-native"

const CatalogItem =({item})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={item.pictureUrl}/>
        </View>
    )
}

export default CatalogItem