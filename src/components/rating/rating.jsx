import React, { Component } from 'react';
import IconStar from './iconStar';
import './rating.css';

class Rating extends Component {
  state = {
    rating: this.props.rating,
  }
  handleRatingMouseMove = (rating) => {
    if (this.props.readonly) return;
    this.setState({ rating });
  }
  handleRatingMouseLeave = () => {
    const { rating } = this.props;
    this.setState({ rating });
  }
  render() {
    const { max } = this.props;
    const maxValue = parseInt(max) || 5;
    const star = Array.from({ length: maxValue }, (value, index) => index+1);
    return (
    <div>
      { 
        star.map(value => 
        <IconStar key={value} 
          value={value} rating={this.state.rating} 
          onSetRating={this.props.onSetRating}
          onRatingMouseMove={this.handleRatingMouseMove}
          onRatingMouseLeave={this.handleRatingMouseLeave}
        />)
      }
    </div>
    );
  }
}

export default Rating;