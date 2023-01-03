import { FC, PropsWithChildren } from 'react';

interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return <div className='mx-auto max-w-screen-xl'>{children}</div>;
};
