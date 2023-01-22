import clsx from 'clsx';
import { FC } from 'react';

enum ButtonStyleEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

interface FollowButtonProps {
  username: string;
  buttonStyle?: keyof typeof ButtonStyleEnum;
}

export const FollowButton: FC<FollowButtonProps> = ({
  username,
  buttonStyle = ButtonStyleEnum.DARK,
}) => {
  const buttonClasses = clsx(
    'text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm active:bg-conduit-gray-650',
    {
      'border-conduit-gray-700 text-conduit-gray-700 hover:bg-conduit-gray-400 focus:bg-conduit-gray-400':
        (buttonStyle = ButtonStyleEnum.DARK),
      'border-conduit-gray-400 text-conduit-gray-400 hover:bg-conduit-gray-400 hover:text-white':
        (buttonStyle = ButtonStyleEnum.LIGHT),
    },
  );

  return (
    <button className={buttonClasses}>
      <i className='ion-plus-round' /> {username}
    </button>
  );
};
