import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles =StyleSheet.create({
    container:{
        flex: 1,
        marginVertical:50,
        marginHorizontal:20,
        justifyContent:"space-around",
    },
    listContainer:{
        width:"100%",
        flexWrap:"wrap",
        

    },
    textContainer:{
        marginVertical:15,
        backgroundColor: colors.backgroundPrimaryDark,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius:5
    },
    text:{
        fontFamily:"monserrat-regular",
        color: colors.textDark,
        fontSize:16
    },
})