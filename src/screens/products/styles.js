import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes/colors"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "red", 
        alignItems:"center",
        justifyContent: "space-around",
        margin:20,
        backgroundColor: colors.backgroundPrimary
    },
    contentContainer:{
        flex:1,
        width:"100%"
    },
    
}
)