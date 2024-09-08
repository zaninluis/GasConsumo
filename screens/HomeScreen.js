import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const calcularConsumo = () => {
    if (!km || !litros || isNaN(km) || isNaN(litros) || parseFloat(litros) === 0) {
      alert('Por favor, insira valores válidos para quilometragem e litros.');
      return;
    }
    const mediaConsumo = parseFloat(km) / parseFloat(litros);
    navigation.navigate('Result', { mediaConsumo });
  };
  return (
    <View style={styles.container}>
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

          <TouchableOpacity 
            style={styles.button} 
            onPress={calcularConsumo}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
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
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: 'red', 
    padding: 15,
    borderRadius: 10, 
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
