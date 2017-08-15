import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';
import { index, posts } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';


export default [
  {
    exact: true,
    path: index,
    component: PostsContainer,
    prepareData: (store) => {
      store.dispatch(fetchPosts());
    }
  },
  {
    path: posts(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      store.dispatch(fetchPost(params.id));
    }
  },
];

