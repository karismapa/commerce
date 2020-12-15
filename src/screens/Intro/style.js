import {StyleSheet} from 'react-native';
import globalStyle from '../../style';

const styles = StyleSheet.create({
  slide: globalStyle.centerContainer,
  title: {fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20},
  image: {resizeMode: 'center', height: 200, width: 200},
  text: {fontSize: 15, textAlign: 'center', color: 'white', marginTop: 20},
});

export default styles;
