import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameScreen({ route }) {
  const { players } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hráči:</Text>
      {players.map((name, index) => (
        <Text key={index} style={styles.player}>{name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
  player: { fontSize: 18, marginVertical: 4 },
});
