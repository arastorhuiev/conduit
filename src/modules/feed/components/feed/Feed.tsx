import { FC } from 'react';
import { Container } from '../../../../components/container/Container';
import { ArticleList } from '../article-list/ArticleList';

export const Feed: FC = () => {
  return (
    <Container>
      <div className='flex'>
        <ArticleList />
        <div className='w-1/4'>tags</div>
      </div>
    </Container>
  );
};
