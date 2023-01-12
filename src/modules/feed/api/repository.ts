import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../core/axios-base-query';
import { FEED_PAGE_SIZE } from '../conts';
import { FeedArticle, GlobalFeedInDTO } from './dto/global-feed.in';
import { PoplarTagsIn } from './dto/popular-tags.in';

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: (response: GlobalFeedInDTO) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getPopularTags: builder.query<PoplarTagsIn, string>({
      query: () => ({
        url: '/tags',
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;
