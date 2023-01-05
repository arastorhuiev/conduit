import { FC } from 'react';
import { Container } from '../../../../components/container/Container';
import { useGetGlobalFeedQuery } from '../../api/repository';
import { ArticleList } from '../article-list/ArticleList';
import { FeedToggle } from '../feed-toggle/FeedToggle';

export const Feed: FC = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if (isLoading) {
    return (
      <Container>
        Feed is loading...
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        Error loading feed
      </Container>
    )
  }

  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <ArticleList list={data?.articles || []} />
        <div className='w-1/4'>tags</div>
      </div>
    </Container>
  );
};
