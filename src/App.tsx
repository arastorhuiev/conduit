import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
    </BrowserRouter>
  );
};
