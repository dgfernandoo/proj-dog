import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

export default function About() {
  const openApi = () => {
    Linking.openURL('https://dog.ceo/dog-api/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre este App</Text>

      <Text style={styles.paragraph}>
        Este aplicativo mostra fotos aleatórias de cachorros usando a Dog API.
        Foi desenvolvido com React Native + site Expo, utilizando navegação Drawer, Tabs e Modal.
      </Text>

      <Text style={styles.paragraph}>
        Objetivo: demonstrar integração com uma API pública e recursos básicos de UI.
      </Text>

      <TouchableOpacity onPress={openApi}>
        <Text style={styles.link}>🔗 Documentação da Dog API</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.metaLabel}>Versão:</Text>
        <Text style={styles.metaValue}>{Constants.expoConfig?.version ?? Constants.manifest?.version ?? '1.0.0'}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.metaLabel}>Autor:</Text>
        <Text style={styles.metaValue}>Douglas Fernando</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
    color: '#333',
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 6,
  },
  metaLabel: {
    fontWeight: '600',
    marginRight: 8,
  },
  metaValue: {
    color: '#444',
  },
});
