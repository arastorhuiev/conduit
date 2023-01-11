import { FC } from 'react';
import { ProfileBanner } from '../components/profile-banner/ProfileBanner';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <>
      <ProfileBanner />
    </>
  );
};
