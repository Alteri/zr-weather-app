import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';
import { GlobalStyle } from './components/Global/globalStyle';
import { Page } from '../src/components/Page';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Page>
      <React.StrictMode>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Page>
  </Provider>
);
