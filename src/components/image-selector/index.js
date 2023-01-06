import { styles } from './styles';
import { View, Image, Text, Alert, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { colors } from '../../constants/themes/colors';
import { useSelector, useDispatch } from 'react-redux';
import { addToCatalog } from '../../store/actions';
import { Ionicons } from '@expo/vector-icons';

const ImageSelector = () => {
  const [pickedUrl, setPickedUrl] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [controlPhoto, setControlFoto] = useState(true);

  const onHandleTakeImage = async () => {
    const isCameraPermissions = await verifyPermissions();
    if (!isCameraPermissions) return;
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });
    setPickedUrl(image.uri);
  };

  const onHandleSendImage = () => {
    dispatch(addToCatalog(userId, token, pickedUrl));
    setControlFoto(!controlPhoto);
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Insufficient permissions', 'You need to give permissions to use the camera', [
        { text: 'Ok' },
      ]);
      return false;
    }
    return true;
  };

  const onHandleDeleteImage = () => {
    setPickedUrl(null);
  };

  return (
    <View style={styles.container}>
      {!pickedUrl ? (
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageSelector}>
            <Ionicons name="camera" size={28} color={colors.textDark} onPress={onHandleTakeImage} />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={{ ...styles.imageContainer, borderWidth: 0 }}>
            <Image style={styles.image} source={{ uri: pickedUrl }} />
          </View>
          <>
            {controlPhoto ? (
              <View style={styles.buttonContainer}>
                <Button title="Send Photo" color={colors.primary} onPress={onHandleSendImage} />
                <Button title="Delete Photo" color={colors.primary} onPress={onHandleDeleteImage} />
              </View>
            ) : (
              <View style={styles.textContainer}>
                <Text style={styles.text}>Gracias! Tu imagen ha sido enviado con exito..</Text>
              </View>
            )}
          </>
        </>
      )}
    </View>
  );
};

export default ImageSelector;
