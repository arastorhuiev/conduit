import { FC } from 'react';
import { ProfileBanner } from '../components/ProfileBanner/ProfileBanner';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <>
      <ProfileBanner />
    </>
  );
};
