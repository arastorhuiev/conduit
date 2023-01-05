import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Article } from './modules/feed/components/article/Article';

import { Banner } from './components/banner/Banner';
import { Header } from './components/header/Header';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Article />
    </BrowserRouter>
  );
};
