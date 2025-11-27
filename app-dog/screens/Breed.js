import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Breed({ route }) {
  const { breed } = route.params;
  const [dog, setDog] = useState(null);

  async function load() {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const json = await res.json();
    setDog(json.message);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{breed}</Text>
      {dog && <Image source={{ uri: dog }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 40 },
  title: { fontSize: 24, marginBottom: 20 },
  image: { width: 300, height: 300, borderRadius: 12 }
});
