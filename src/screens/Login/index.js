import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import baseAPI from '../../api';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('email', email);
    } catch (err) {
      console.log(err);
    }
  };

  const onPressLogin = () => {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);
    console.log(`${baseAPI}/login`);

    Axios.post(`${baseAPI}/login`, data, {
      timeout: 5000,
    })
      .then((res) => {
        saveToken(res.data.token);
        setEmail('');
        setPassword('');
        navigation.navigate('HomeNav');
      })
      .catch((err) => {
        alert('Email or password not valid');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.formContainer}>
          <Text>Email</Text>
          <TextInput
            placeholder={'Email'}
            style={styles.formInput}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.formContainer}>
          <Text>Password</Text>
          <TextInput
            placeholder={'Password'}
            style={styles.formInput}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <Button
          color={'#2f3180'}
          title={'LOGIN'}
          onPress={() => onPressLogin()}
        />
      </View>
    </View>
  );
};

export default Login;
