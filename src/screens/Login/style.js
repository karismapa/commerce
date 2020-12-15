import {StyleSheet} from 'react-native';
import globalStyle from '../../style';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  block: {
    height: 350,
    width: '100%',
    backgroundColor: '#108690',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {resizeMode: 'center', height: 150, width: 150, marginTop: 25},
  loginContainer: {
    width: '80%',
    elevation: 5,
    padding: 20,
    borderRadius: 20,
    position: 'absolute',
    top: 300,
    backgroundColor: 'white',
  },
  formContainer: {width: '100%', paddingBottom: 10},
  formInput: {
    width: '100%',
    borderBottomColor: '#2f3180',
    borderBottomWidth: 0.5,
  },
});

export default styles;
