import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentsListProps {}

export const CommentsList: FC<CommentsListProps> = ({}) => {
  const comments: any[] = [];

  return (
    <div className='max-w-3xl mx-auto mt-16 flex flex-col gap-2'>
      <p>
        <Link to='/sign-in'>Sign in</Link> or <Link to='/sign-up'>sign up</Link> to add comments on
        this article
      </p>
      {comments.map((comment) => (
        <CommentItem />
      ))}
    </div>
  );
};
