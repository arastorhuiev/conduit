import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../components/Container/Container';
import { useGetSingleArticleQuery } from '../api/repository';
import { ArticleBanner } from '../components/ArticleBanner/ArticleBanner';
import { ArticleMeta } from '../components/ArticleMeta/ArticleMeta';
import { CommentsList } from '../components/CommentsList/CommentsList';
import { TagList } from '../components/TagList/TagList';

interface ArticlePageProps {}

const convertNewLines = (body: string) => {
  return body.split('\\n').join('<br />');
};

export const ArticlePage: FC<ArticlePageProps> = () => {
  const { slug } = useParams();

  const { data, isLoading, isError } = useGetSingleArticleQuery({ slug: slug! });

  if (isError) {
    return <h1>Article Not found</h1>;
  }

  if (isLoading || !data) {
    return <></>;
  }

  return (
    <>
      <ArticleBanner
        title={data.article.slug}
        author={data.article.author}
        likes={data.article.favoritesCount}
        publishedAt={data.article.createdAt}
      />
      <Container>
        <div className='pb-8 border-b mb-6'>
          <p
            className='text-articleBody leading-articleBody font-sourceSerif mb-8'
            dangerouslySetInnerHTML={{
              __html: convertNewLines(data.article.body),
            }}
          />
          <TagList list={data.article.tagList} />
        </div>
        <div className='flex justify-center'>
          <ArticleMeta
            authorNameStyle={'GREEN'}
            author={data.article.author}
            likes={data.article.favoritesCount}
            publishedAt={data.article.createdAt}
          />
        </div>
        <CommentsList />
      </Container>
    </>
  );
};
