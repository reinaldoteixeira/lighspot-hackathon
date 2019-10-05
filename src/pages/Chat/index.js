import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import colors from '../../colors';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import 'moment/locale/pt-br';

import {chat} from '../../mock';

export default function Chat({goBack}) {
  const [data, changeData] = useState(chat);

  const hora = new Date();

  const [mensagem, changeMensagem] = useState('');

  function RenderRight({dados}) {
    return (
      <View style={styles.mensagemDireitaContainer}>
        <View style={styles.mensagemDireita}>
          <View style={{flex: 1, width: '100%'}}>
            <Text style={styles.mensagemName}>{dados.author.name}</Text>
          </View>
          <View style={styles.mensagemCaixa}>
            <Text style={styles.mesangemConteudo}>{dados.message}</Text>
          </View>
          <Text style={styles.mesangemHora}>{dados.date.split(' ')[1]}</Text>
        </View>
      </View>
    );
  }

  function RenderLeft({dados}) {
    return (
      <View style={styles.mensagemEsquerdaContainer}>
        <View style={styles.mensagemEsquerda}>
          <View style={{flex: 1, width: '100%'}}>
            <Text style={styles.mensagemName}>{dados.author.name}</Text>
          </View>
          <View style={styles.mensagemCaixa}>
            <Text style={styles.mesangemConteudo}>{dados.message}</Text>
          </View>
          <Text style={styles.mesangemHora}>{dados.date.split(' ')[1]}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.yellow} barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Image
            style={styles.arrow}
            source={require('../../image/back-arrow.png')}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.titulo}>LIGHTSPOT</Text>
          <Image
            style={styles.image}
            source={require('../../image/logo.png')}
          />
        </View>
      </View>
      <View style={styles.conteudo}>
        <ScrollView>
          {data.map((item, index) => {
            if (item.was_me == 0) {
              return <RenderLeft dados={item} key={index + Date.now()} />;
            } else {
              return <RenderRight dados={item} key={index + Date.now()} />;
            }
          })}
        </ScrollView>
        <View style={styles.enviar}>
          <TextInput
            placeholder="Digite sua mensagem..."
            style={styles.textInput}
            value={mensagem}
            onChangeText={changeMensagem}
          />
          <TouchableOpacity
            onPress={() => {
              const valor = [...data];
              valor.push({
                message: mensagem,
                was_me: 1,
                author: {
                  name: 'Leonado Theodoro',
                },
                date: moment().format('dd/MM/YYYY HH:mm'),
              });
              changeMensagem('');
              changeData(valor);
            }}>
            <Image
              style={styles.arrow}
              source={require('../../image/send-arrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
