import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const calcularConsumo = () => {
    // Verifica se os valores são válidos antes de calcular
    if (!km || !litros || isNaN(km) || isNaN(litros) || parseFloat(litros) === 0) {
      alert('Por favor, insira valores válidos para quilometragem e litros.');
      return;
    }
    const mediaConsumo = parseFloat(km) / parseFloat(litros);
    navigation.navigate('Result', { mediaConsumo });
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/BackgroundImage.png')} 
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.label}>Quilometragem (KM):</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="numeric"
            value={km}
            onChangeText={setKm}
          />
          <Text style={styles.label}>Litros de Gasolina Consumidos:</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="numeric"
            value={litros}
            onChangeText={setLitros}
          />
          <Button title="Calcular" onPress={calcularConsumo}
          style={styles.button}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta a imagem para cobrir toda a tela, mantendo a proporção
  },
  button: {
    // aqui vai a estilizacao do botao
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha os itens ao topo
    padding: 16,
    marginTop: 50, // Ajuste este valor para posicionar os elementos conforme desejado
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparência para melhor visualização dos textos
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    fontSize: 18,
  },
});
