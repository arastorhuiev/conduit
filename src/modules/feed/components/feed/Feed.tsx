import { FC } from 'react';
import { Container } from '../../../../components/container/Container';
import { ArticleList } from '../article-list/ArticleList';
import { FeedToggle } from '../feed-toggle/FeedToggle';

export const Feed: FC = () => {
  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <ArticleList />
        <div className='w-1/4'>tags</div>
      </div>
    </Container>
  );
};
