import { FC } from 'react';

import { ArticleAuthor, NameStyleEnum } from '../ArticleAuthor/ArticleAuthor';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { FollowButton } from '../../../profile/components/FollowButton/FollowButton';
import { Author } from '../../api/dto/global-feed.in';

interface ArticleMetaProps {
  authorNameStyle?: keyof typeof NameStyleEnum;
  author: Author;
  likes: number;
  publishedAt: string;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
  author,
  likes,
  publishedAt
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={author}
          publishedAt={publishedAt}
          nameStyle={authorNameStyle}
        />
      </div>
      <div className="inline-flex gap-4">
        <FollowButton username={author.username} buttonStyle={'LIGHT'} />
        <FavoriteButton count={likes} extended={true} />
      </div>
    </div>
  );
};
