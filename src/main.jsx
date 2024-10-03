import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';
import { ModalProvider } from './context/ModalProvider.jsx';
import { persistor, store } from './redux/store.js';
import App from './App.jsx';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ModalProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
