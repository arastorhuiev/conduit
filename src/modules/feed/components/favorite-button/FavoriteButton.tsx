import { FC } from 'react';

export const FavoriteButton: FC = () => {
  return (
    <button
      className='
      text-conduit-green
      border-conduit-green
      text-center
      align-middle
      cursor-pointer
      select-none
      border
      py-1
      px-2
      text-sm
      rounded-buttonSm
      hover:text-white
      hover:bg-conduit-green
      focus:bg-conduit-darkGreen
      focus:text-white
    '>
      <i className='ion-heart'></i>
      <span className='ml-1 font-normal'>70</span>
    </button>
  );
};
