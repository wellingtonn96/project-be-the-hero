import React, {useState} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';

import LogoImg from './../../assets/logo.png';

import {styles} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([
    {id: 1, name: 'Elon Musk', caso: 'Tesla', value: 150.2},
    {id: 2, name: 'Jef Pesus', caso: 'Amazon', value: 150.2},
    {id: 3, name: 'Bill Gates', caso: 'Microsoft', value: 150.2},
    {id: 4, name: 'Lerry Page', caso: 'Google', value: 150.2},
  ]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContent}>
            <Image source={LogoImg} />
          </View>
          <View style={styles.headerTextContent}>
            <Text style={styles.headerText}>total de 43 casos</Text>
          </View>
        </View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia
        </Text>

        <FlatList
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          onEndReachedThreshold={0.2}
          renderItem={({item: incident}) => (
            <View style={styles.incidentContainer}>
              <View style={styles.incidentContent}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>
              </View>

              <View style={styles.incidentContent}>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.caso}</Text>
              </View>

              <View style={styles.incidentContent}>
                <Text style={styles.incidentProperty}>VALOR: </Text>
                <Text style={styles.incidentValue}>{incident.value}</Text>
              </View>

              <View style={styles.detailsLink}>
                <Text style={styles.navDethes}>Ver mais detalhes</Text>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
