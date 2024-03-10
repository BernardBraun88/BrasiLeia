import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import NewsFilterForm from '../components/NewsFilterForm';

const HomeScreen: React.FC = () => {
  const [filteredTerm, setFilteredTerm] = useState<string>('');

  const handleFilter = (term: string) => {
    setFilteredTerm(term);
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      <View style={styles.container}>
        <Header />
        <NewsFilterForm onFilter={handleFilter} />
        <NewsList filteredTerm={filteredTerm} />
      </View>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;