import { useQuery, QueryClient } from 'react-query';

const fetchNews = async () => {
  try {
    const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/');
    if (!response.ok) {
      throw new Error(`Erro ao buscar notícias: ${response.statusText}`);
    }

    const { items } = await response.json();

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('A resposta da API não possui a estrutura esperada ou está vazia.');
    }

    return items;
  } catch (error) {
    throw new Error(`Erro na solicitação da API: ${error.message}`);
  }
};

const queryClient = new QueryClient();

const useNews = () => {
  return useQuery('news', fetchNews, {
    queryClient, // Pass the QueryClient instance
  });
};

export default useNews;
