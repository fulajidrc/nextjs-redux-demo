import '@/styles/globals.css'
import { wrapper, store, persistor } from '@/store/store';
import { Provider } from "react-redux";
import Layout from '../components/layout'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* persistor  persistor */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </PersistGate>
      </Provider>
    </> 
  )
}


export default wrapper.withRedux(MyApp);

