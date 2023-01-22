import { FC } from 'react';
import { Container } from '../../../../components/Container/Container';
import { Profile } from '../../api/dto/get-profile.in';
import { FollowButton } from '../FollowButton/FollowButton';

interface ProfileBannerProps {
  profile: Profile;
}

export const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
  return (
    <div className='bg-conduit-gray-100 pt-8 pb-4 mb-8'>
      <Container>
        <div>
          <img
            src={`${profile.image}`}
            alt={`${profile.username} avatar`}
            className='w=25 h-25 rounded-full mx-auto mb-4'
          />
          <h2 className='text-center font-bold text-2xl'>{`${profile.username}`}</h2>
        </div>
        <div className='flex justify-end'>
          <FollowButton username={profile.username} />
        </div>
      </Container>
    </div>
  );
};
