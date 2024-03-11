import React from 'react';
import { View, Text } from 'react-native';

interface NewsDetailsProps {
  news: {
    id: string;
    title: string;
    content: string;
    source: string;
  };
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ news }) => {
  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{news.title}</Text>
      <Text>{news.content}</Text>
      <Text style={{ marginTop: 10 }}>Fonte: {news.source}</Text>
    </View>
  );
};

export default NewsDetails;
