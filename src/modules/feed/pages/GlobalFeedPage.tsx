import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetGlobalFeedQuery } from '../api/repository';

import { Feed } from '../components/Feed/Feed';
import { Banner } from '../../../components/Banner/Banner';

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  const { isLoading, isFetching, data, error } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  return (
    <>
      <Banner />
      <Feed
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
        data={data}
      />
    </>
  );
};
