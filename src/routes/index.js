import PostsContainer from 'components/containers/PostsContainer';
import PostContainer from 'components/containers/PostContainer';
import Contacts from 'components/views/contacts/index';
import { index, posts, contacts } from 'helpers/routes';
import { fetchPosts } from 'actions/posts';
import { fetchPost } from 'actions/post';
import initialLoad from 'helpers/initialLoad';

export default [
  {
    exact: true,
    path: index,
    component: PostsContainer,
    prepareData: (store) => {
      if (initialLoad()) return;
      return store.dispatch(fetchPosts());
    }
  },
  {
    exact: true,
    path: posts(),
    component: PostContainer,
    prepareData: (store, query, params) => {
      if (initialLoad() || !params.id) return;
      return store.dispatch(fetchPost(params.id));
    }
  },
  
  {
    path: contacts(),
    component: Contacts,
    prepareData: () => {}
  }

];

