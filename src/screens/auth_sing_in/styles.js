import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  keyBoardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  contentContainer: {
    justifyContent: 'space-around',
    borderBottomEndRadius:5,
    height: 330,
    width: '80%',
    padding: 30,
    backgroundColor: colors.backgroundPrimary
   
  }
    ,
  image: {
    height: 140,
    width: 300,
    marginTop: 50,
    resizeMode: 'contain',
  },
  title: { 
    fontFamily: 'monserrat-bold', 
    fontSize: 18,
    textAlign:"center",
    marginBottom:5
 },
  text: {
    fontFamily: 'monserrat-regular', 
    fontSize: 16,
    textAlign:"center",
    
  },

  label: {
    fontFamily: 'monserrat-regular', 
  fontSize: 16,
},
input:{
    paddingBottom:5,
    borderBottomWidth: 1,
    borderBottomColor:colors.textDark
},
buttonContainer:{
    flexDirection: "row",
    justifyContent:"center",
    marginVertical: 12
}

});
