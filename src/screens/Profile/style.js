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
  profpic: {
    resizeMode: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: '#2f3180',
    marginTop: 25,
  },
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
  round: {
    height: 200,
    width: '40%',
    marginHorizontal: '30%',
    marginVertical: 75,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 150,
  },
  rectangle: {
    height: 100,
    width: '40%',
    marginHorizontal: '30%',
    borderWidth: 1,
    borderColor: 'white',
  },
  btnTakeContainer: {
    width: '100%',
    position: 'absolute',
    top: 570,
    alignItems: 'center',
  },
  btnTake: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
