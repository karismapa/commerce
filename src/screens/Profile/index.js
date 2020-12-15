import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';

const Profile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const getEmail = async () => {
      try {
        const gotEmail = await AsyncStorage.getItem('email');
        setEmail(gotEmail);
      } catch (err) {
        console.log(err);
      }
    };

    getEmail();
  }, []);

  const onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('email');
    } catch (err) {
      console.log(err);
    } finally {
      navigation.navigate('Login');
    }
  };

  const takePicture = async () => {
    const options = {quality: 0.5, base64: true};
    if (camera) {
      const data = await camera.takePictureAsync(options);
      setPhoto(data);
      setIsVisible(false);
    }
  };

  const renderCamera = () => {
    return (
      <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)}>
        <View style={{flex: 1}}>
          <RNCamera
            style={{flex: 1}}
            ref={(ref) => {
              camera = ref;
            }}>
            <View style={styles.round} />
            <View style={styles.rectangle} />
            <View style={styles.btnTakeContainer}>
              <TouchableOpacity
                style={styles.btnTake}
                onPress={() => takePicture()}>
                <Icon name="camera" size={30} />
              </TouchableOpacity>
            </View>
          </RNCamera>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <TouchableOpacity
          style={styles.frame}
          onPress={() => setIsVisible(true)}>
          <Image
            source={
              photo === null
                ? require('../../assets/images/logo.png')
                : {uri: photo.uri}
            }
            style={styles.profpic}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.formContainer}>
          <Text>Email</Text>
          <TextInput
            placeholder={'None'}
            style={styles.formInput}
            value={email}
            editable={false}
          />
        </View>
        <Button
          color={'#2f3180'}
          title={'LOGOUT'}
          onPress={() => onPressLogout()}
        />
      </View>
      {renderCamera()}
    </View>
  );
};

export default Profile;
