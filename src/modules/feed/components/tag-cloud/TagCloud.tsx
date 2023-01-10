import { FC } from 'react';
import { Container } from '../../../../components/container/Container';
import { useGetPopularTagsQuery } from '../../api/repository';
import { TagList } from '../tag-list/TagList';

interface TagCloudProps {}

export const TagCloud: FC<TagCloudProps> = () => {
  const { data, error, isLoading, isFetching } = useGetPopularTagsQuery('');

  if (isLoading || isFetching) {
    return (
      <div className='bg-conduit-tagCloudBg p-3 pt-1.5'>
        <p className='mb-2'>Loading popular tags...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-conduit-tagCloudBg p-3 pt-1.5'>
        <p className='mb-2'>{`Loading error ${error}`}</p>
      </div>
    );
  }

  return (
    <div className='bg-conduit-tagCloudBg p-3 pt-1.5'>
      <p className='mb-2'>Popular Tags</p>
      <TagList list={data!.tags} itemStyle={'DARK'} isLink={true} />
    </div>
  );
};
