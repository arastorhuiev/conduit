import { FC } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import clsx from 'clsx';

interface FeedToggleProps {
  defaultText?: string;
  defaultLink?: string;
}

export const FeedToggle: FC<FeedToggleProps> = ({
  defaultText = 'Global Feed',
  defaultLink = '/',
}) => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  const globalFeedClasses = clsx(
    'bg-white border-conduit-green py-2 px-4 hover:no-underline',
    {
      'text-black/30 hover:text-black/60 ': tag,
      'border-b-2': !tag,
    },
  );

  return (
    <div className='h-8'>
      <ul className='flex'>
        <li>
          <NavLink to={defaultLink} className={globalFeedClasses}>
            {defaultText}
          </NavLink>
          {tag && (
            <span className='bg-white border-b-2 border-conduit-green py-2 px-4 text-conduit-green'>
              # {tag}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};
