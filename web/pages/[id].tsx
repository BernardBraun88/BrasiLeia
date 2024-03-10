// pages/news/[id].tsx
import { useRouter } from 'next/router';
import useNews from '../hooks/useNews';

const NewsDetailPage: React.FC = () => {
  const router = useRouter();
  const { data, isLoading, error } = useNews();

  console.log('Router Query:', router.query);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error instanceof Error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  // Verifique se 'data' é um array e não está vazio
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Nenhuma notícia disponível.</p>;
  }

  // Encontre a notícia com base no 'id' da rota
  const selectedNews = data.find((news: any) => news.id === Number(router.query.id));

  console.log('Selected News:', selectedNews);

  if (!selectedNews) {
    return <p>Notícia não encontrada.</p>;
  }

  return (
    <div>
      <h1>{selectedNews.titulo}</h1>
      <p>{selectedNews.introducao}</p>
      <a href={selectedNews.link} target="_blank" rel="noopener noreferrer">
        Leia mais no site oficial
      </a>
    </div>
  );
};

export default NewsDetailPage;
