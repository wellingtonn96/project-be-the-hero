import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import LogoImg from './../../assets/logo.png';

import {styles} from './styles';

export default function Detail() {
  const navigation = useNavigation();

  const message = 'e ae tudo bem';

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=11945574125&text=${message}`);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContent}>
            <Image source={LogoImg} />
          </View>
          <View style={styles.headerTextContent}>
            <TouchableOpacity onPress={() => navigateBack()}>
              <Text
                style={(styles.headerText, {color: 'red', fontWeight: 'bold'})}>
                Incidents
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.incidentContainer}>
          <View style={styles.incidentContent}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>ddfsf lorineis</Text>
          </View>

          <View style={styles.incidentContent}>
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>ddfsf lorineis</Text>
          </View>

          <View style={styles.detailsLink}>
            <Text style={styles.incidentProperty}>DESCRIÇÃO: </Text>
            <Text style={styles.incidentValue}>
              A cadeirinha Julie foi atropelada port um carro no bairro Santana
              e teve que passar por uma cirurgia ás pressas
            </Text>
          </View>

          <View style={styles.incidentContent}>
            <Text style={styles.incidentProperty}>VALOR: </Text>
            <Text style={styles.incidentValue}>ddfsf lorineis</Text>
          </View>
        </View>

        <View style={styles.incidentContainer}>
          <View style={styles.detailsLink}>
            <Text style={styles.contactProperty}>Salve o dia!</Text>
            <Text style={styles.contactProperty}>Seja o heroi desse caso.</Text>
            <Text style={styles.contactValue}>entre em contato</Text>
          </View>

          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => sendWhatsapp()}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
