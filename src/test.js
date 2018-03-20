import React from 'react';
import ReactDOM from 'react-dom';
import Browse from './components/browse/browse';
import CommentSection from './components/comment-section/comment-section';
import Detail from './components/detail/detail';
import Filter from './components/filter/filter';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import UserLabel from './components/user-label/user-label';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Browse />, div);
  ReactDOM.render(<CommentSection />, div);
  ReactDOM.render(<Detail />, div);
  ReactDOM.render(<Filter />, div);
  ReactDOM.render(<Navbar />, div);
  ReactDOM.render(<Sidebar />, div);
  ReactDOM.render(<UserLabel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
