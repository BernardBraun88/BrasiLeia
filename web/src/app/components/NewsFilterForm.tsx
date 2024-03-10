// components/NewsFilterForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';

interface NewsFilterFormProps {
  onFilter: (filter: string) => void;
}

const NewsFilterForm: React.FC<NewsFilterFormProps> = ({ onFilter }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onFilter(data.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-row">
      <label className="hidden sm:block">
        Pesquisar Notícias:
        <input
          type="text"
          {...register('searchTerm')}
          className="border-2 rounded-md p-1"
        />
      </label>
      <button
        type="submit"
        className="bg-green-400 text-white button-height px-4 py-1 rounded-md ml-2"
      >
        Filtrar
      </button>
    </form>
  );
};

export default NewsFilterForm;
