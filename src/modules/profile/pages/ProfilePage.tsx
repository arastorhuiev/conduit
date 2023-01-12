import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useGetProfileFeedQuery } from '../../feed/api/repository';
import { usePageParams } from '../../feed/hooks/use-page-params';

import { Container } from '../../../components/Container/Container';
import { Feed } from '../../feed/components/Feed/Feed';
import { ProfileBanner } from '../components/ProfileBanner/ProfileBanner';
import { FeedToggle } from '../../feed/components/FeedToggle/FeedToggle';

type ProfilePageParams = {
  profile: string;
};

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const { profile } = useParams<ProfilePageParams>();
  const location = useLocation();

  const { isLoading, isFetching, data, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
  });

  return (
    <>
      <ProfileBanner />
      <Container>
        <FeedToggle defaultText='My Articles' defaultLink={location.pathname} />
        <Feed
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
          data={data}
        />
      </Container>
    </>
  );
};
