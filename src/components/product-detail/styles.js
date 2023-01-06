import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    minHeight:400,
    maxHeight: 800,
    width: '85%',
    marginHorizontal:15,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  headerContainer: {
    margin: 30,
  },
  title: {
    fontFamily: 'monserrat-bold',
    fontSize: 20,
  },
  priceContainer: {
    marginVertical: 20,
  },
  priceText: {
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  },
 
  image: {
    maxHeight: 300,
    maxWidth: 300,
    resizeMode: 'contain',
    marginHorizontal: 10,
    paddingHorizontal:10,
    borderRadius:5
  },
  detailContainer: {
    margin: 10,
    paddingHorizontal:10,
    justifyContent: 'space-around',
    alignItems:"center"
  },
  detailText: {
    fontFamily: 'monserrat-regular',
    fontSize: 16,
    marginBottom: 7,
  },
  handlerContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100,
    margin: 10,
  },
  handlerText:{
    fontFamily: 'monserrat-bold',
    fontSize: 16,
  },


  buttonContainer: {
    margin: 10,
  },
});
