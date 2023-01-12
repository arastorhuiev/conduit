import { FC, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useGetGlobalFeedQuery } from '../../api/repository';
import { FEED_PAGE_SIZE } from '../../conts';
import { serializeSearchParams } from '../../../../utils/router';

import ReactPaginate from 'react-paginate';

import { Container } from '../../../../components/Container/Container';
import { FeedToggle } from '../FeedToggle/FeedToggle';
import { ArticleList } from '../ArticleList/ArticleList';
import { TagCloud } from '../TagCloud/TagCloud';

export const Feed: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get('page') ? Number(searchParams.get('page')) : 0,
  );

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }));
  };

  const pageCounter = Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE);

  if (isLoading || isFetching) {
    return <Container>Feed is loading...</Container>;
  }

  if (error) {
    return <Container>Error loading feed</Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <div className='w-3/4'>
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
        </div>

        <div className='w-1/4 pl-3'>
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};
