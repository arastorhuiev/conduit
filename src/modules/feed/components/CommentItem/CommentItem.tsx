import { FC } from 'react';
import { Author } from '../../api/dto/global-feed.in';
import { ArticleMeta } from '../ArticleMeta/ArticleMeta';

interface CommentItemProps {
  body: string;
  publishedAt: string;
  author: Author;
}

export const CommentItem: FC<CommentItemProps> = ({ body, author, publishedAt }) => {
  return (
    <div className='border border-conduit-gray-250 rounded'>
      <div className='p-5'>
        <p>{body}</p>
      </div>
      <div className='border-t border-conduit-gray-250 bg-conduit-gray-150 py-3 px-5'>
        <ArticleMeta
          authorNameStyle={'GREEN'}
          author={author}
          publishedAt={publishedAt}
          showActionButtons={false}
          authorDirection='ROW'
          authorNameSize='SMALL'
        />
      </div>
    </div>
  );
};
