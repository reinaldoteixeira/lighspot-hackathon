import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../../colors';

import {message} from '../../mock';

export default function Home() {
  function RenderCard({data}) {
    return (
      <View style={styles.card}>
        <View style={styles.tituloCard}>
          <Text style={styles.tituloBold}>
            {data.title.length > 30
              ? data.title.substr(0, 30) + '...'
              : data.title}
          </Text>
          <Text>{data.date.replace(/-/g, '/')}</Text>
        </View>
        <View style={styles.cardConteudo}>
          <Text>{data.description}</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={colors.yellow} barStyle="dark-content" />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.titulo}>LIGHTSPOT</Text>
          <Image
            style={styles.image}
            source={require('../../image/logo.png')}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {message.map((m, i) => {
          return <RenderCard data={m} key={i + Date.now()} />;
        })}
      </ScrollView>
    </>
  );
}
