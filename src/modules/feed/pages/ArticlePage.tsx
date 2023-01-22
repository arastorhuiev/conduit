import { FC } from 'react';
import { Container } from '../../../components/Container/Container';
import { ArticleBanner } from '../components/ArticleBanner/ArticleBanner';
import { ArticleMeta } from '../components/ArticleMeta/ArticleMeta';
import { TagList } from '../components/TagList/TagList';

interface ArticlePageProps {}

export const ArticlePage: FC<ArticlePageProps> = () => {
  return (
    <>
      <ArticleBanner />
      <Container>
        <div className='pb-8 border-b mb-6'>
          <p className='text-articleBody leading-articleBody font-sourceSerif mb-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            dolorum quod ducimus odio cumque quaerat cum quae officiis,
            necessitatibus exercitationem ea consequuntur sint officia expedita
            est. Sint provident harum reprehenderit. Excepturi officiis, iure
            explicabo expedita earum eveniet officia quae debitis, dolor qui
            atque, alias necessitatibus magni. Eius nobis, ut deserunt nihil
            omnis error sit iure, iste, quidem quis alias provident? Eveniet
            voluptatum, nisi minus laudantium totam voluptatibus, amet vero
            tempora explicabo reiciendis quasi recusandae culpa saepe pariatur
            ipsum provident iure nam quod, natus animi nihil cumque. Non quidem
            consequatur tenetur.
          </p>
          <TagList list={['123', '123', '1244']} />
        </div>
        <div className='flex justify-center'>
          <ArticleMeta authorNameStyle={'GREEN'} />
        </div>
      </Container>
    </>
  );
};
