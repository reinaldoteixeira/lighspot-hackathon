/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  cardConteudo: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  person: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  areaUsuario: {
    width: 45,
    height: 45,
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: colors.white,
    //height: 120,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 10,
    shadowOpacity: 0.34,
    shadowRadius: -6.27,
  },
  tituloCard: {
    width: '100%',
    height: 35,
    backgroundColor: colors.yellow,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
    backgroundColor: colors.yellow,
    justifyContent: 'flex-end',
  },
  conteudo: {
    width: '100%',
  },
  image: {},
  tituloBold: {
    fontWeight: 'bold',
  },
});

export default styles;
