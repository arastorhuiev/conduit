import { FC } from 'react';

import ReactPaginate from 'react-paginate';

import { usePageParams } from '../../hooks/use-page-params';
import { FeedData } from '../../api/repository';
import { FEED_PAGE_SIZE } from '../../conts';

import { ArticleList } from '../ArticleList/ArticleList';

interface FeedProps {
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
  data?: FeedData;
}

export const Feed: FC<FeedProps> = ({ isLoading, isFetching, error, data }) => {
  const { page, setPage } = usePageParams();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  const pageCounter = Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE);

  if (isLoading || isFetching) {
    return <p className='mt-4'>Feed is loading...</p>;
  }

  if (error) {
    return <p className='mt-4'>Error loading feed</p>;
  }

  if (data?.articlesCount === 0) {
    return <p className='mt-4'>No articles are here... yet.</p>
  }

  return (
    <>
      <ArticleList list={data?.articles || []} />
      <nav className='my-6'>
        <ReactPaginate
          containerClassName='flex'
          pageCount={pageCounter}
          pageRangeDisplayed={pageCounter}
          previousLabel={null}
          nextLabel={null}
          pageClassName='group'
          pageLinkClassName='p-3 text-conduit-green bg-white border border-conduit-gray-300 -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-gray-200'
          activeClassName='active group'
          activeLinkClassName='group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green'
          onPageChange={handlePageChange}
          forcePage={page}
        />
      </nav>
    </>
  );
};
