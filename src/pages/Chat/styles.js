import {StyleSheet} from 'react-native';

import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
    backgroundColor: colors.yellow,
    justifyContent: 'space-between',
  },
  arrow: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  titulo: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  conteudo: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 58,
  },
  textInput: {
    paddingLeft: 10,
    width: '80%',
    height: 60,
    backgroundColor: colors.white,
  },
  enviar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingRight: 20,
    borderTopWidth: 0.2,
    borderTopColor: '#999',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mensagemDireita: {
    padding: 5,
    width: '60%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.green,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 6,
    shadowOpacity: 0.34,
    shadowRadius: -6.27,
    alignItems: 'flex-end',
  },
  mensagemDireitaContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  mensagemEsquerda: {
    padding: 5,
    width: '60%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    elevation: 6,
    shadowOpacity: 0.34,
    shadowRadius: -6.27,
    alignItems: 'flex-end',
  },
  mensagemEsquerdaContainer: {
    width: '100%',
  },
  mensagemName: {
    marginLeft: 2,
    fontWeight: 'bold',
  },
  mensagemCaixa: {
    flexDirection: 'row',
    width: '100%',
  },
  mesangemConteudo: {
    marginLeft: 6,
  },
  mesangemHora: {
    fontSize: 10,
    marginTop: 5,
  },
});

export default styles;
