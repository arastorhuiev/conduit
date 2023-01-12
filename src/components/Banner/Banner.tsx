import { FC } from 'react';
import { Container } from '../Container/Container';

export const Banner: FC = () => {
  return (
    <div className='bg-conduit-green shadow-banner text-white p-8 mb-8'>
      <Container>
        <h1 className='font-titillium drop-shadow-logo text-center text-logo font-bold pb-2'>
          conduit
        </h1>
        <p className='text-center font-light text-2xl'>
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  );
};
