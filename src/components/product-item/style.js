import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors"

export const styles =StyleSheet.create({
    container:{
        flex:1,
        height:200,
        width:"100%",
        backgroundColor: colors.backgroundPrimaryDark,
        marginVertical:25,
        padding:10,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    containerTouchable:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    title:{
        fontFamily:"monserrat-bold",
        fontSize: 20
    },
    title: {
        color: colors.textDark,
        fontSize:20,
        fontFamily: "monserrat-bold"
    },
    priceText:{
        color: colors.textDark,
        fontSize:18,
        fontFamily: "monserrat-bold"
    },

})