import { FC } from 'react';

import { Link } from 'react-router-dom';

import { FeedArticle } from '../../api/dto/global-feed.in';

import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { TagList } from '../TagList/TagList';
import { ArticleAuthor } from '../ArticleAuthor/ArticleAuthor';

interface ArticleProps extends FeedArticle {
  key: string;
}

export const Article: FC<ArticleProps> = ({
  author,
  createdAt,
  title,
  description,
  favoritesCount,
  tagList,
  slug,
}) => {
  return (
    <article>
      <div className='border-t border-black/10 py-6'>
        <div className='mb-4 font-light flex justify-between'>
          <ArticleAuthor author={author} createdAt={createdAt} />
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link
          to={`article/${encodeURIComponent(slug)}`}
          className='hover:no-underline'>
          <h1 className='mb-1 font-semibold text-2xl text-conduit-gray-1000'>
            {title}
          </h1>
          <p className='text-conduit-gray-700 font-light mb-1'>{description}</p>
          <div className='flex justify-between'>
            <span className='text-conduit-gray-500 text-date font-light'>
              Read more...
            </span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};
