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
        justifyContent:"center",
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    title:{
        fontFamily:"monserrat-regular"
    },
    image:{
        width:"100%",
        height: 200, 
        borderRadius:5, 
    },
    imageSelector:{
        width:"100%",
        height: 200,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent:"space-around",
        width:"80%",
        marginTop: 7
        
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
        fontFamily:"monserrat-bold",
        color: colors.textDark,
        fontSize:16
    },
})