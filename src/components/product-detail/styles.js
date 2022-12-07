
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical: 20,
        paddingVertical:20,
        paddingHorizontal:10,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 5,
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    headerContainer: {
        marginBottom:30
    },
    title: {
        fontFamily:"monserrat-bold",
        fontSize:20
    },
    priceContainer: {
        marginVertical:20
    },
    priceText: {
        fontFamily:"monserrat-bold",
        fontSize:16,
        
    },
    
    image:{
        height:300,
        width:350, 
        resizeMode: "contain",
        marginHorizontal: 10
    },
    detailContainer: {
        marginBottom:30,
        justifyContent: "space-around"
    },
    detailText: {
        fontFamily:"monserrat-regular",
        fontSize:16,
        marginBottom:7
    },

})