import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../favorite-button/FavoriteButton';
import { TagList } from '../tag-list/TagList';

interface ArticleProps {}

export const Article: FC<ArticleProps> = ({}) => {
  return (
    <article>
      <div className='border-t border-black/10 py-6'>
        <div className='mb-4 font-light flex justify-between'>
          <Link to='/@finswim'>
            <img
              src='https://api.realworld.io/images/demo-avatar.png'
              alt='finswim'
              className='inline-block h-8 w-8 rounded-full'
            />
          </Link>
          <div className='mr-6 ml-0.3 inline-block leading-4 inline-flex flex-col'>
            <Link to='/@finswim' className='font-medium'>
              Andrii Rastorhuiev
            </Link>
            <span className='text-conduit-gray text-date'>03 january 2023</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to='article/test' className='hover:no-underline'>
          <h1 className='mb-1 font-semibold text-2xl text-conduit-darkestGray'>
            Some title
          </h1>
          <p className='text-conduit-darkenGray font-light mb-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            tenetur aperiam molestias doloremque pariatur sunt. Numquam,
            consequatur? Autem unde harum, molestias non adipisci voluptatem
            soluta beatae, ullam aliquid, doloribus velit?
          </p>
          <div className='flex justify-between'>
            <span className='text-conduit-gray text-date font-light'>
              Read more...
            </span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};
