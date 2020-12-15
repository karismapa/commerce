import {StyleSheet} from 'react-native';
import globalStyle from '../../style';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#108690',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 15,
  },
  listContainer: {
    marginBottom: 50,
  },
  trainingContainer: {
    margin: 10,
    padding: 20,
    elevation: 2,
    borderRadius: 10,
  },
  trainingTitle: {
    fontSize: 20,
    color: '#108690',
    marginBottom: 20,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  cartButton: {
    position: 'absolute',
    height: 50,
    width: 300,
    top: 550,
    backgroundColor: '#108690',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
