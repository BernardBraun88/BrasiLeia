// components/NewsList.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import useNews from '../../../hooks/useNews';
import NewsFilterForm from './NewsFilterForm';

const NewsList: React.FC = () => {
  const { data, isLoading, error } = useNews();
  const [filter, setFilter] = useState<string>('');

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error instanceof Error) {
    return <p>Ocorreu um erro: {error.message}</p>;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <p>Nenhuma notícia disponível.</p>;
  }

  const handleFilter = (searchTerm: string) => {
    setFilter(searchTerm);
  };

  const filteredData = filter
    ? data.filter((news: any) =>
        news.titulo.toLowerCase().includes(filter.toLowerCase())
      )
    : data;

  return (
    <div className=" flex-column">
      <div className="flex-row space-between">
        <h2 className="text-center title-size my-4">Últimas Notícias</h2>
        <NewsFilterForm onFilter={handleFilter} />
      </div>
    <div className="w-screen center">
      <ul>
        {filteredData.map((news: any) => (
          <li key={news.id} className="my-4 flex-row">
            {news.imagens && (
              <img
                src={`https://agenciadenoticias.ibge.gov.br/${JSON.parse(
                  news.imagens
                ).image_fulltext}`}
                alt="Imagem da Notícia"
                className="my-4 max-width-image border-radius"
              />
            )}
            <div className="flex-column padding-left-image">
              <h1 className='max-width title-size bold-font'>{news.titulo}</h1>
              <p className='max-width'>{news.introducao}</p>
              <a href={news.link} target="_blank" rel="noopener noreferrer" className="semi-bold">
                Leia mais no site oficial
              </a>
            </div>
            <br /><br />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default NewsList;
