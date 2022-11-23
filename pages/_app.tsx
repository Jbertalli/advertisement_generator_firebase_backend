import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" sizes="32x32" href="/images/E&T_logo.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/E&T_logo.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/E&T_logo.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/E&T_logo.png" />
      </Head>
      <Provider store={store}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp
