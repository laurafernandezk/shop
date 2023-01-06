import { styles } from './styles';
import { View, Text,  FlatList } from 'react-native';
import { ImageSelector, CatalogItem } from '../../components';
import { CATALOG } from '../../constants/data';
import { getNumber } from '../../utils/functions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPhoto } from '../../store/actions';

const Catalog = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadPhoto())
  },[dispatch])

  const renderItem = ({ item }) => <CatalogItem item={item} />;
  const ListHeaderComponent =()=>(
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Quieres formar parte de nuestro catalogo? 
          </Text>
        </View>)
  const ListFooterComponent =()=>(
    <>
    <View style={styles.textContainer}>
          <Text style={styles.text}>
            Adjunta una imagen luciendo nuestros productos para tener la posibilidad!
          </Text>
        </View>
        <ImageSelector />
        </>
  )
  return (
    <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            numColumns="2"
            horizontal={false}
            data={CATALOG}
            keyExtractor={() => getNumber().toString()}
            renderItem={renderItem}
            ListHeaderComponent ={ListHeaderComponent}
            ListFooterComponent ={ListFooterComponent}
          />
        </View>
    </View>
  );
};

export default Catalog;
