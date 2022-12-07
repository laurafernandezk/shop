import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        backgroundColor: colors.primary,
        marginVertical: 20,
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
    text: {
        fontFamily:"monserrat-bold",
        fontSize:20,
        color:colors.textDark
    },
})