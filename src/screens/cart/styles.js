import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical:50,
        marginHorizontal:20
    },
    listContainer: {
        flex: 1,
        justifyContent:"space-around"
    },
    confirmContainer:{
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            backgroundColor: colors.backgroundPrimaryDark,
            borderWidth: 2,
            borderColor: colors.textDark,
            borderRadius:5,
            paddingVertical:12,
         },
 confirmText:{
    fontFamily:"monserrat-bold",
    fontSize: 16,
    color: colors.textDark

 },
    textContainer:{
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        height:400
    },
    text:{
        fontFamily: "monserrat-bold",
        fontSize:20,
        color: colors.textDark
    }

})