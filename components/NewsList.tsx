import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import useNews from '../hooks/useNews'; // Certifique-se de ajustar o caminho correto

const NewsList: React.FC<{ filteredTerm: string }> = ({ filteredTerm }) => {
  const { data, isLoading, error } = useNews();
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Ocorreu um erro: {error.message}</Text>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <Text>Nenhuma notícia disponível.</Text>;
  }

  const handleNextPage = () => {
    const endIndex = page * itemsPerPage;
    if (endIndex < data.length) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  const visibleData = filteredTerm ? data.filter((news: any) =>
    news.titulo.toLowerCase().includes(filteredTerm.toLowerCase())
  ) : data.slice(startIndex, endIndex);

  return (
    <ScrollView>
      <View>
        {visibleData.map((news: any) => (
          <TouchableOpacity key={news.id} onPress={() => Linking.openURL(news.link)}>
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>{news.titulo}</Text>
              <Text style={styles.newsIntro}>{news.introducao}</Text>
            </View>
            {news.imagens && (
              <Image
                source={{ uri: `https://agenciadenoticias.ibge.gov.br/${JSON.parse(news.imagens).image_fulltext}` }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
            <View>
              <Text style={styles.newsLink}>Leia mais no site oficial</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.pagination}>
          <TouchableOpacity onPress={handlePrevPage} disabled={page === 1}>
            <Text style={[styles.paginationText, { marginRight: 10 }]}>Anterior</Text>
          </TouchableOpacity>
          <Text>{`Página ${page}`}</Text>
          <TouchableOpacity onPress={handleNextPage} disabled={endIndex >= data.length}>
            <Text style={[styles.paginationText, { marginLeft: 10 }]}>Próxima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
   newsIntro: {
     fontSize:14,
     marginBottom:8,
   },
   newsLink:{
     color:'blue',
     textDecorationLine:'underline',
   },
   pagination:{
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     marginTop:10,
   },
   paginationText:{
     color:'blue',
   },
});

export default NewsList;