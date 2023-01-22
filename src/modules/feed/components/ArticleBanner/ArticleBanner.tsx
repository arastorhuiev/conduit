import { FC } from 'react';
import { Container } from '../../../../components/Container/Container';
import { ArticleMeta } from '../ArticleMeta/ArticleMeta';

interface ArticleBannerProps {}

export const ArticleBanner: FC<ArticleBannerProps> = ({}) => {
  return (
    <div className='bg-conduit-gray-1100 pt-8 pb-4 mb-8'>
      <Container>
        <h1 className='text-white text-articleTitle font-semibold leading-articleTitle mb-8'>
          test
        </h1>
        <ArticleMeta />
      </Container>
    </div>
  );
};
