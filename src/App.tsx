import { FC } from 'react';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
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
            <Route path='/:profile' element={<ProfilePage />}  />
            <Route path='/:profile/favorites' element={<ProfilePage />}  />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
