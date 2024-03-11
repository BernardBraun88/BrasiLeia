// hooks/useNews.ts
import { useQuery } from 'react-query';

const fetchNews = async () => {
  try {
    const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/');
    if (!response.ok) {
      throw new Error(`Erro ao buscar notícias: ${response.statusText}`);
    }

    const { items } = await response.json();

    // Verifique se 'items' é um array e não está vazio
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('A resposta da API não possui a estrutura esperada ou está vazia.');
    }

    return items;
  } catch (error: any) {
    throw new Error(`Erro na solicitação da API: ${error.message}`);
  }
};

const useNews = () => {
  return useQuery('news', fetchNews);
};

export default useNews;
