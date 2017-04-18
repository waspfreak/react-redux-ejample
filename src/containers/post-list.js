import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPost } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostList extends Component{
  renderList(){
    return this.props.posts.map((post) => {
      return(
        <li key={post.title}
            onClick={() => this.props.selectPost(post)}>
          {post.title}
        </li>
      )
    });
  }

  render(){
    return(
      <ul className="post-list">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return{
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectPost: selectPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
