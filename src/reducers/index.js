import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import PostsReducer from './reducer_posts';
import ActiveBook from './reducer_active_book';
import ActivePost from './reducer_active_post';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  posts: PostsReducer,
  activePost: ActivePost
});

export default rootReducer;
