import React, { Component } from 'react';
import Rating from '../rating/rating';
import Initial from '../initial/initial';
import './comments.scss';

class Comment extends Component {
  render() {
    const { name, rating, description } = this.props.comment;
    return (
    <div className="comment-container">
      <Initial value={name}/>
      <div className="comment-details">
        <div className="comment-header">
          <div className="comment-name">{ name }</div>
          <div><Rating rating={rating} readonly/></div>
        </div>
        <div className="comment-description">
        { description }
        </div>
      </div>
    </div>
    );
  }
}
 
export default Comment;