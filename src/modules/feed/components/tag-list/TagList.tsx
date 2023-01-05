import { FC } from 'react';

interface TagListProps {
  list: string[];
}

export const TagList: FC<TagListProps> = ({ list }) => {
  return (
    <ul className='flex'>
      {list.map((tag) => (
        <li
          key={tag}
          className='font-light text-date border border-conduit-lightenGray text-conduit-tag mr-1 mb-0.2 px-tag rounded-tag'>
          qwerty
        </li>
      ))}
    </ul>
  );
};
