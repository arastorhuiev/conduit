import { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter } from 'react-router-dom';

import { Banner } from './components/banner/Banner';
import { Header } from './components/header/Header';
import { Feed } from './modules/feed/components/feed/Feed';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='pb-16'>
          <Header />
          <Banner />
          <Feed />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
