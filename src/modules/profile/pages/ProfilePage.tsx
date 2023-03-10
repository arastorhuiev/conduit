import { FC } from "react";
import { useLocation, useParams } from "react-router-dom";

import { useGetProfileFeedQuery } from "../../feed/api/repository";
import { useGetProfileQuery } from "../api/repository";
import { usePageParams } from "../../feed/hooks/use-page-params";

import { Container } from "../../../components/Container/Container";
import { Feed } from "../../feed/components/Feed/Feed";
import { ProfileBanner } from "../components/ProfileBanner/ProfileBanner";
import { FeedToggle } from "../../feed/components/FeedToggle/FeedToggle";

type ProfilePageParams = {
  profile: string;
};

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const { profile } = useParams<ProfilePageParams>();
  const { pathname } = useLocation();

  const {
    data: profileInfo,
    isLoading: profileLoading,
    error: profileError,
    isFetching: profileFetching,
  } = useGetProfileQuery({ username: profile! });

  const { data, isLoading, error, isFetching } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorite: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`),
  });

  const FeedToggleItems = [
    {
      text: "Favorited articles",
      link: `/${encodeURIComponent(profile!)}/favorites`,
    },
  ];

  if (profileLoading) {
    return null;
  }

  return (
    <>
      <ProfileBanner profile={profileInfo!.profile} />
      <Container>
        <FeedToggle
          defaultText="My Articles"
          defaultLink={`/${encodeURIComponent(profile!)}`}
          items={FeedToggleItems}
        />
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
