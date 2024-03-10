// components/NewsDetails.tsx
import React from 'react';

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
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <p>Fonte: {news.source}</p>
      {/* Adicione mais informações da notícia conforme necessário */}
    </div>
  );
};

export default NewsDetails;
