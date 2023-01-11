import { FC } from 'react';
import { Container } from '../../../../components/container/Container';
import { FollowButton } from '../follow-button/FollowButton';

interface ProfileBannerProps {}

export const ProfileBanner: FC<ProfileBannerProps> = () => {
  return (
    <div className='bg-conduit-gray-100 pt-8 pb-4'>
      <Container>
        <div>
          <img
            src='https://api.realworld.io/images/demo-avatar.png'
            alt='username avatar'
            className='w=25 h-25 rounded-full mx-auto mb-4'
          />
          <h2 className='text-center font-bold text-2xl'>Magda Parry</h2>
        </div>
        <div className='flex justify-end'>
          <FollowButton />
        </div>
      </Container>
    </div>
  );
};
