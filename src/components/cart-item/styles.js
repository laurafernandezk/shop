import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimaryDark,
    marginVertical: 10,
    borderRadius: 5,
    padding: 15,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,

  },
  title: {
     flex: 1,
     fontFamily:"monserrat-bold",
     fontSize:16,
     },
  contentContainer: { 
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: colors.primary,
    height:70,
  

 },
  detail: {
  paddingVertical:5,
 
  
 },
  text: {
    margin:2,
    fontFamily: "monserrat-regular"
    },
    handleContainer:{
      flexDirection:"row",
      width:100,
      justifyContent:"space-around",
      alignItems:"center",
      width:100,
      marginVertical:5,
  },
});
