import React, {useState} from 'react';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const trainings = [
  {
    id: '1',
    title: 'Laravel - Web Development (Batch 19)',
    time: '02 Nov - 27 Nov 2020',
    description:
      'Laravel merupakan framework berbasis PHP yang sangat populer, cepat, dan mudah dalam membuat website custom sesuai dengan kebutuhan dan keinginan.',
    price: 200000,
  },
  {
    id: '2',
    title: 'Python - Data Science (Batch 19)',
    time: '02 Nov - 27 Nov 2020',
    description:
      'Data science dan machine learning merupakan salah satu skill yang sedang trending dan banyak dicari berbagai perusahaan. Pamor Python juga semakin populer dikarenakan banyak library python yang memudahkan pengolahan data dan machine learning.',
    price: 250000,
  },
  {
    id: '3',
    title: 'Wordpress - CMS (Batch 19)',
    time: '02 Nov - 27 Nov 2020',
    description:
      'Wordpress sangat cocok untuk membuat website dengan kebutuhan fitur yang umum seperti web blog, company profile, web sekolah, toko online, kursus online, donasi, dan banyak lagi. Pembuatannya cepat, murah, dan tidak perlu kemampuan coding.',
    price: 100000,
  },
];

const Home = ({navigation}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const training = trainings.find((training) => training.id === id);

    if (training) {
      setCart([...cart, training]);
    }
  };

  const cartPrice = () => {
    return cart
      .map((training) => training.price)
      .reduce((bef, cur) => bef + cur, 0);
  };

  const cartProceed = () => {
    setCart([]);
    navigation.navigate('Cart');
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.trainingContainer}>
        <View>
          <Text style={styles.trainingTitle}>{item.title}</Text>
        </View>
        <View>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.action}>
          <Text>Harga: Rp. {item.price}</Text>
          <Button
            title={'Tambah'}
            color={'#108690'}
            onPress={() => addToCart(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SanberStudy</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={trainings}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      {cart.length !== 0 && (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => cartProceed()}>
          <Text style={styles.cartButtonText}>
            {cart.length} training, Rp. {cartPrice()}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
