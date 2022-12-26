import {styles} from "./styles";
import { View,  Text, ScrollView } from "react-native";
import { ImageSelector } from "../../components";

const Catalog =()=>{

    const onImagePicker =(uri)=>{
        console.warn("uri", uri)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <View>
                    <Text> Quieres formar parte de nuestro catalogo? Adjunta una imagen con nuestros productos para tener la posibilidad!</Text>
                </View>
                <ImageSelector onImagePicker={onImagePicker}/>
            </View>
        </ScrollView>
    )
}

export default Catalog;