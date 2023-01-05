import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Banner } from './components/banner/Banner';
import { Header } from './components/header/Header';
import { Feed } from './modules/feed/components/feed/Feed';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Feed />
    </BrowserRouter>
  );
};
