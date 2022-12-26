import { styles } from './styles';
import { View, Image, Text, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { colors } from '../../constants/themes/colors';

const ImageSelector = ({ onImagePicker }) => {
  const [pickedUrl, setPickedUrl] = useState(null);

  const onHandleTakeImage = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return;
    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.7
    })
    setPickedUrl(image.uri);
    onImagePicker(image.uri)
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert('Insufficient permissions', 'You need to give permissions to use the camera', [
        { text: 'Ok' },
      ]);
      return false;
    }else{
    return true
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {!pickedUrl ? (
          <Text style={styles.title}>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Take Photo" color={colors.primary} onPress={onHandleTakeImage} />
    </View>
  );
};

export default ImageSelector;
