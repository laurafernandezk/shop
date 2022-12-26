import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Button,
} from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { colors } from '../../constants/themes/colors';
import { useDispatch } from 'react-redux';
import { singUp } from '../../store/actions';

const AuthSingUp = ({ navigation }) => {
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const dispatch =useDispatch()

  const onHandleSubmit =()=>{
    dispatch(singUp(email, password))

  }

  return (
    <KeyboardAvoidingView
      style={styles.keyBoardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/images/Ramp.jpg')} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sing Up</Text>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholderTextColor={colors.primary}
            value={email}
            onChangeText={(text) => {setEmail(text)}}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholderTextColor={colors.primary}
            value={password}
            onChangeText={(text) => {setPassword(text)}}
          />
          <View style={styles.buttonContainer}>
            <Button color={colors.backgroundPrimaryDark} title="Sing Up" onPress={onHandleSubmit} disabled={!email ||!password} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AuthSingIn')}>
            <Text style={styles.text}>Do you have an acount?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthSingUp;
