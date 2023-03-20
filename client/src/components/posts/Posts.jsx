import './posts.scss';

import Post from '../post/Post';

import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios.js';

const Posts = () => {
  const { isLoading, error, data } = useQuery(['posts'], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div className='posts'>
      {error
        ? "Something went wrong :("
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id}/>)}
    </div>
  );
};

export default Posts