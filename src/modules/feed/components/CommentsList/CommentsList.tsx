import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetArticleCommentsQuery } from '../../api/repository';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentsListProps {}

export const CommentsList: FC<CommentsListProps> = ({}) => {
  const { slug } = useParams();
  const { data, isLoading } = useGetArticleCommentsQuery({ slug: slug! });

  if (isLoading) {
    return <p>Wait loading comments...</p>;
  }

  if (!data?.comments) {
    return (
      <div>
        <p>
          <Link to='/sign-in'>Sign in</Link> or <Link to='/sign-up'>sign up</Link> to add comments
          on this article
        </p>
        <p>No comments for this article</p>
      </div>
    );
  }

  return (
    <div className='max-w-3xl mx-auto mt-16 flex flex-col gap-2'>
      <p>
        <Link to='/sign-in'>Sign in</Link> or <Link to='/sign-up'>sign up</Link> to add comments on
        this article
      </p>
      {data?.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          body={comment.body}
          publishedAt={comment.createdAt}
          author={comment.author}
        />
      ))}
    </div>
  );
};
