import {styles} from "./styles"
import { View, Image,  TouchableOpacity } from "react-native"

const Home =({navigation})=>{
    return(
        
        <TouchableOpacity onPress={()=>navigation.navigate("AuthSingUp")}  style={styles.container}>
            <View style={styles.contentContainer}>
            <Image  style ={styles.image} source= {require("../../../assets/images/Ramp.jpg")}/>
            </View>
        </TouchableOpacity>
    )
        
}

export default Home 
