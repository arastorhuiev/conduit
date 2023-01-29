import { FC } from "react";

import { ArticleAuthor, NameStyleEnum } from "../ArticleAuthor/ArticleAuthor";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { FollowButton } from "../../../profile/components/FollowButton/FollowButton";

interface ArticleMetaProps {
  authorNameStyle?: keyof typeof NameStyleEnum;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({
  authorNameStyle = NameStyleEnum.LIGHT,
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={{ username: "stes", image: "ssrc", following: false }}
          createdAt={new Date().toISOString()}
          nameStyle={authorNameStyle}
        />
      </div>
      <div className="inline-flex gap-4">
        <FollowButton username={"hello"} buttonStyle={"LIGHT"} />
        <FavoriteButton count={84} extended={true} />
      </div>
    </div>
  );
};
