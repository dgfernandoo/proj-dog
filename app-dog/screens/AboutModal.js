import React from "react";
import { Modal, View, Text, TouchableOpacity, Linking, StyleSheet } from "react-native";

export default function AboutModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalBox}>

          <Text style={styles.title}>Sobre o App</Text>

          <Text style={styles.text}>
            Este app mostra fotos aleatórias de cachorros usando a Dog API.
          </Text>

          {/* 🔗 Link da API */}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://dog.ceo/dog-api/")}
          >
            🔗 https://dog.ceo/dog-api/
          </Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
