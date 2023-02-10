import { ComponentProps, FC } from 'react';

import { ArticleAuthor, NameStyleEnum } from '../ArticleAuthor/ArticleAuthor';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { FollowButton } from '../../../profile/components/FollowButton/FollowButton';
import { Author } from '../../api/dto/global-feed.in';

interface ArticleMetaProps {
  author: Author;
  publishedAt: string;
  authorNameStyle?: ComponentProps<typeof ArticleAuthor>['nameStyle'];
  authorDirection?: ComponentProps<typeof ArticleAuthor>['direction'];
  authorNameSize?: ComponentProps<typeof ArticleAuthor>['nameSize'];
  likes?: number;
  showActionButtons?: boolean;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
  author,
  likes,
  publishedAt,
  showActionButtons = true,
  authorDirection,
  authorNameSize,
}) => {
  return (
    <div>
      <div className='inline-block'>
        <ArticleAuthor
          author={author}
          publishedAt={publishedAt}
          nameStyle={authorNameStyle}
          direction={authorDirection}
          nameSize={authorNameSize}
        />
      </div>
      {showActionButtons && (
        <div className='inline-flex gap-4'>
          <FollowButton username={author.username} buttonStyle={'LIGHT'} />
          <FavoriteButton count={likes || 0} extended={true} />
        </div>
      )}
    </div>
  );
};
