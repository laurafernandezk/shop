import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        flex: 1,
        justifyContent:"space-around",
        alignItems: "center",
        backgroundColor: colors.backgroundPrimaryDark,
        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 12,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
    
            elevation: 6,
      },
      text:{
        color: colors.textDark,
        fontFamily:"monserrat-regular",
        margin:2

      }

})