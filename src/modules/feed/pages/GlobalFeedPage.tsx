import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGetGlobalFeedQuery } from '../api/repository';
import { usePageParams } from '../hooks/use-page-params';

import { Feed } from '../components/Feed/Feed';
import { Banner } from '../../../components/Banner/Banner';
import { Container } from '../../../components/Container/Container';
import { FeedToggle } from '../components/FeedToggle/FeedToggle';
import { TagCloud } from '../components/TagCloud/TagCloud';

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParams();

  const { isLoading, isFetching, data, error } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  return (
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className='flex'>
          <div className='w-3/4'>
            <Feed
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              data={data}
            />
          </div>
          <div className='w-1/4 pl-3'>
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};
