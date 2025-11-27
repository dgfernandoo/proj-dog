import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function DogCard({ url }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#eee",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 300
  }
});
