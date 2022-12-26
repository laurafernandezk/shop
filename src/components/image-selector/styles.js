import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
       
    },
    imageContainer:{
        borderColor: colors.textDark,
        borderWidth: 1,
        width:"100%",
        height: 200,
        margin:15,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{},
    image:{
        width:"100%",
        height: 200,
        
    },
})