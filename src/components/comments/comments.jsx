import React, { Component } from 'react';
import Comment from './comment';
import Rating from '../rating/rating';
import productImage from '../../assets/images/acoustic-guitar.jpg';
import './comments.scss';

const data = [
  {
    id: 1,
    name: 'Elmer Datolayta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 3
  },
  {
    id: 2,
    name: 'Melvin Reston',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 1
  },
  {
    id: 3,
    name: 'Francis Gelsano',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    rating: 5
  }
];

const newCommentModel = {
  id: 0,
  name: '',
  description: '',
  rating: 0,
};

class Comments extends Component {
  state = {
    comments: data,
    newComment: { ...newCommentModel },
  };

  handleInputChange = (event, key) => {
    const newComment = { ...this.state.newComment };
    newComment[key] = event.target.value;
    this.setState({ newComment });
  }

  handleSetRating = (value) => {
    const newComment = { ...this.state.newComment };
    newComment.rating = value;
    this.setState({ newComment });
  }

  handleSetComment = () => {
    const newComment = { ...this.state.newComment };
    const comments = [newComment, ...this.state.comments];
    this.setState({ comments });
    this.setState({ newComment: {...newCommentModel}});
  }

  render() {
    const { name, description, rating } = this.state.newComment;
    return (
    <div className="comments-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="product-image" src={productImage} alt="acoustic guitar"/>
          </div>
          <div className="col-md-6">
            <h3 className="product-title">Acoustic Guitar</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 className="product-price">₱ 1,899.00</h2>
            <button className="btn btn-primary btn-lg btn-buy-now">Buy Now</button>
          </div>
        </div>
        <div className="row comment-new">
          <div className="col-md-3 rating-section">
            <h1 className="rating-value">{rating}</h1>
            <Rating rating={rating} onSetRating={this.handleSetRating}/>
            <div className="rating-title">Product Review Rating</div>
          </div>
          <div className="col-md-9">
            <input className="form-control comment-control" 
                placeholder="Name"
                id="name"
                value={name}
                onChange={event => {this.handleInputChange(event, 'name')}} />
            <textarea className="form-control comment-control"
                placeholder="Comment"
                value={description}
                onChange={event => {this.handleInputChange(event, 'description')}}>
                </textarea>
            <button className="btn btn-primary btn-lg"
              onClick={this.handleSetComment}>Comment</button>
          </div>
        </div>
      </div>
      <div>
        { this.state.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
    );
  }
}
 
export default Comments;