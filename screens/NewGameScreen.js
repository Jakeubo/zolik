import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NewGameScreen({ navigation }) {
  const [players, setPlayers] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    const updated = [...players];
    updated[index] = text;
    setPlayers(updated);
  };

  const handleStartGame = () => {
    const filled = players.filter(name => name.trim() !== '');
    if (filled.length < 2) {
      Alert.alert('Chyba', 'Zadej alespoň 2 hráče.');
      return;
    }

    navigation.navigate('Game', { players: filled });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zadej jména hráčů:</Text>

      {players.map((name, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Hráč ${index + 1}`}
          value={name}
          onChangeText={(text) => handleChange(text, index)}
        />
      ))}

      <Button title="Spustit hru" onPress={handleStartGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  title: { fontSize: 28, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
    width: '100%',
    fontSize: 18,
  },
});
