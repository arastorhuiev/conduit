import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../core/axios-base-query';
import { FEED_PAGE_SIZE } from '../conts';
import { GlobalFeedIn } from './dto/global-feed.in';
import { PoplarTagsIn } from './dto/popular-tags.in';

interface GlobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
      query: ({ page }) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
        },
      }),
    }),
    getPopularTags: builder.query<PoplarTagsIn, string>({
      query: () => ({
        url: '/tags',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;
