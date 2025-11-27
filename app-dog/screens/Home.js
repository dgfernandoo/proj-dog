import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import AboutModal from './AboutModal';

export default function Home() {
  const [dog, setDog] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  async function loadDog() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await res.json();
    setDog(json.message);
  }

  useEffect(() => {
    loadDog();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto Aleatória</Text>

      {dog && (
        <Image source={{ uri: dog }} style={styles.image} />
      )}

      <TouchableOpacity style={styles.button} onPress={loadDog}>
        <Text style={styles.buttonText}>Outra Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.modalText}>Abrir Modal</Text>
      </TouchableOpacity>

      <AboutModal visible={modalVisible} onClose={() => setModalVisible(false)} />

      <Text style={styles.footer}>Versão: {Constants.expoConfig.version}</Text>
      <Text style={styles.footer}>Idioma: {Localization.locale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 40, backgroundColor: "#fff" },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 300, height: 300, borderRadius: 12 },
  button: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: { color: "#fff", fontSize: 16 },
  modalButton: { marginTop: 20 },
  modalText: { color: "blue", fontSize: 16 },
  footer: { marginTop: 10, fontSize: 12, color: "#666" }
});
