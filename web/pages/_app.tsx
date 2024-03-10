import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../src/app/globals.css';
import Header from '../src/app/components/Header';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <Header />
      <Component {...pageProps} />
      <ReactQueryDevtools /> {/* Opcional: Ferramentas de desenvolvedor do React Query */}
    </QueryClientProvider>
  );
}

export default MyApp;