import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component{
  render(){
    if(!this.props.post){
      return <div>Select a post</div>
    }
    return(
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    post: state.activePost
  }
}

export default connect(mapStateToProps)(PostDetail);
