import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewsFilterForm = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('O que está sendo pesquisado: ', searchTerm )
    console.log('O que está sendo executado: ', onFilter(searchTerm) )
    onFilter(searchTerm);
  };

  return (
    <View style={styles.container}>
      <Text>Pesquisar Notícias:</Text>
      <TextInput
        placeholder="Digite aqui"
        onChangeText={setSearchTerm}
        value={searchTerm}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Filtrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  button: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default NewsFilterForm;