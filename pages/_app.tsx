import '../styles/globals.css';
import Layout from '../components/Layout';
import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
