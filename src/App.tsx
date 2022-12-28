import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};