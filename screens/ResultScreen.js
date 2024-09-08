import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ResultScreen({ route }) {
  const { mediaConsumo } = route.params;

  const classificacaoConsumo = (media) => {
    if (media > 12) return 'A'; // Excelente
    if (media > 10) return 'B'; // Bom
    if (media > 8) return 'C'; // Regular
    if (media > 4) return 'D'; // Ruim
    return 'E'; // Muito ruim
  };

  const getImageForClassification = (media) => {
    if (media > 12) return require('../assets/ponteiro_alto.png'); 
    if (media > 8) return require('../assets/ponteiro_medio.png'); 
    return require('../assets/ponteiro_baixo.png'); 
  };

  const getBackgroundColor = (media) => {
    if (media > 12) return '#00fa9a'; 
    if (media > 10) return '#c3e6cb'; 
    if (media > 8) return '#fff3cd'; 
    if (media > 4) return '#f5c6cb'; 
    return '#f8d7da'; 
  };

  const mediaClassificacao = classificacaoConsumo(mediaConsumo);
  const imagemClassificacao = getImageForClassification(mediaConsumo);
  const corFundo = getBackgroundColor(mediaConsumo);

  return (
    <View style={[styles.container, { backgroundColor: corFundo }]}>
      <Text style={styles.text}>Média de Consumo: {mediaConsumo.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {mediaClassificacao}</Text>

      {/* Exibir a imagem baseada na classificação */}
      <Image source={imagemClassificacao} style={styles.image} />
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
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200, 
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
  },
});
