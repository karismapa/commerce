import React from 'react';
import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const slides = [
  {
    key: '1',
    text: 'Belajar sesuai waktu luang',
    image: require('../../assets/images/working-time.png'),
    backgroundColor: '#1d1e4e',
  },
  {
    key: '2',
    text: 'Mulai dari beginner hingga advance',
    image: require('../../assets/images/venture.png'),
    backgroundColor: '#2f3180',
  },
  {
    key: '3',
    text: 'Menggunakan teknologi terkini',
    image: require('../../assets/images/research.png'),
    backgroundColor: '#108690',
  },
];

const Intro = ({navigation}) => {
  const onDone = () => {
    navigation.navigate('Login');
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-forward" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      onDone={onDone}
    />
  );
};

export default Intro;
