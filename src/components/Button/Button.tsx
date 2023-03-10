import clsx from 'clsx';
import { ComponentProps, FC, PropsWithChildren } from 'react';

export enum ButtonStyleEnum {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
}

enum ButtonSizeEnum {
  BASE = 'BASE',
  LG = 'LG',
}

interface ButtonProps {
  buttonStyle?: keyof typeof ButtonStyleEnum;
  size?: keyof typeof ButtonSizeEnum;
  type?: ComponentProps<'button'>['type'];
  disabled?: ComponentProps<'button'>['disabled'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  buttonStyle = ButtonStyleEnum.DARK,
  size = ButtonSizeEnum.BASE,
  children,
  ...buttonProps
}) => {
  const buttonClasses = clsx(
    'text-center align-middle cursor-pointer select-none border active:bg-conduit-gray-650',
    {
      'border-conduit-gray-700 text-conduit-gray-700 hover:bg-conduit-gray-400 focus:bg-conduit-gray-400':
        buttonStyle === ButtonStyleEnum.DARK,
      'border-conduit-gray-400 text-conduit-gray-400 hover:bg-conduit-gray-400 hover:text-white':
        buttonStyle === ButtonStyleEnum.LIGHT,
      'border-conduit-green bg-conduit-green text-white hover:bg-conduit-darkGreen hover:border-conduit-darkGreen hover:text-white':
        buttonStyle === ButtonStyleEnum.GREEN,
      'py-1 px-2 text-sm rounded-buttonSm': size === ButtonSizeEnum.BASE,
      'py-3 px-6 text-xl rounded': size === ButtonSizeEnum.LG,
    },
  );

  return (
    <button className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
};
