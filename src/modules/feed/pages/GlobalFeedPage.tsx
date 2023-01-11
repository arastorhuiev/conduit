import { FC } from 'react';
import { Banner } from '../../../components/banner/Banner';
import { Feed } from '../components/feed/Feed';

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  return (
    <>
      <Banner />
      <Feed />
    </>
  );
};
