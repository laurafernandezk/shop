import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:150,
        height:150,
        alignItems: "center",
        margin:10,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
    },
    image:{
        width: 150,
        height:150,
        resizeMode: "cover",
        borderRadius:10
    },

})