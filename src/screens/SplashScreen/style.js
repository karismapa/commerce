import {StyleSheet} from 'react-native';
import globalStyle from '../../style';

const styles = StyleSheet.create({
  container: {...globalStyle.centerContainer, backgroundColor: '#108690'},
  logoContainer: {alignItems: 'center'},
  image: {resizeMode: 'center', height: 200, width: 200},
  title: {fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 20},
});

export default styles;
