import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DogCard from '../components/DogCard';

export default function Gallery() {
  const [dogs, setDogs] = useState([]);

  async function loadDogs() {
    let list = [];
    for (let i = 0; i < 8; i++) {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      list.push(json.message);
    }
    setDogs(list);
  }

  useEffect(() => {
    loadDogs();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <DogCard url={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 20, backgroundColor: "#fff" }
});
