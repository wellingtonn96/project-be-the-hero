import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

import LogoImg from './../../assets/logo.png';

import {styles} from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([[]]);

  const navegation = useNavigation();
  function navegateToDetail() {
    navegation.navigate('Detail');
  }

  async function loadIncidents() {
    const response = await api.get('/incidents');

    setIncidents(response.data);
  }
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

              <TouchableOpacity
                style={styles.detailsLink}
                onPress={() => navegateToDetail()}>
                <Text style={styles.navDethes}>Ver mais detalhes</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
}
