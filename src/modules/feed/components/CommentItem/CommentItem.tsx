import { FC } from 'react';
import { ArticleMeta } from '../ArticleMeta/ArticleMeta';

interface CommentItemProps {}

export const CommentItem: FC = ({}) => {
  return (
    <div className='border border-conduit-gray-250 rounded'>
      <div className='p-5'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum officia autem fuga iste
          similique repellat incidunt at hic voluptatibus? Aliquid culpa quasi minus laborum
          consectetur nisi laboriosam ratione nulla earum.
        </p>
      </div>
      <div className='border-t border-conduit-gray-250 bg-conduit-gray-150 py-3 px-5'>
        <ArticleMeta
          authorNameStyle={'GREEN'}
          author={{username: 'John Doe', image: 'https://avatars.githubusercontent.com/u/1', following: false}}
          publishedAt={new Date().toISOString()}
          showActionButtons={false}
          authorDirection='ROW'
          authorNameSize='SMALL'
        />
      </div>
    </div>
  );
};
