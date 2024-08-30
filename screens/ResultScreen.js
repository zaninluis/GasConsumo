import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { mediaConsumo } = route.params;

  const classificacaoConsumo = (media) => {
    if (media > 12) return 'A';
    if (media > 10) return 'B';
    if (media > 8) return 'C';
    if (media > 4) return 'D';
    return 'E';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média de Consumo: {mediaConsumo.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {classificacaoConsumo(mediaConsumo)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 16,
  },
});
