import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors"

export const styles =StyleSheet.create({
    container:{
        flex:1,
        height:250,
        width:"95%",
        backgroundColor: colors.backgroundPrimaryDark,
        marginVertical:25,
        padding:15,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    detailContainer:{
        flexDirection:"row"
    },
    descriptionContainer:{
        width:130,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center"

    },
    image:{
        width: 150,
        height:150,
        marginLeft:5,
        marginVertical: 15,
        borderRadius: 5
    },
    containerTouchable:{
        flex:1,
        
    },
   
    title: {
        color: colors.textDark,
        fontSize:20,
        fontFamily: "monserrat-bold",
        alignSelf: "center"
    },
    text:{
        color: colors.textDark,
        fontSize:16,
        fontFamily: "monserrat-regular"
    },

    priceText:{
        color: colors.textDark,
        fontSize:18,
        fontFamily: "monserrat-bold"
    },

})