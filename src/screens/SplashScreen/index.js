import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>SanberSchool</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
