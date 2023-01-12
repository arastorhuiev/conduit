import { FC } from 'react';
import { Banner } from '../../../components/Banner/Banner';
import { Feed } from '../components/Feed/Feed';

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  return (
    <>
      <Banner />
      <Feed />
    </>
  );
};
