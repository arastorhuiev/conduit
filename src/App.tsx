import { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/header/Header';
import { GlobalFeedPage } from './modules/feed/pages/GlobalFeedPage';
import { ProfilePage } from './modules/profile/pages/ProfilePage';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='pb-16'>
          <Header />
          <Routes>
            <Route path='/' element={<GlobalFeedPage />} />
            <Route element={<ProfilePage />} path='/:profile' />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
