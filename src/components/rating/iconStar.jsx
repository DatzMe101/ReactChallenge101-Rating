import React, { Component } from 'react';
import './rating.scss';

class IconStar extends Component {
  
  handleSetRating(value) {
    if (!this.props.onSetRating) return;
    this.props.onSetRating(value);
  }

  render() {
    const { rating, value } = this.props;
    const fillColor = '#FFAC70';
    const emptyColor = '#CDC3D2';
    const fillColorValue = rating >= value ? fillColor: emptyColor;
    return (
      <svg className="icon-star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
          onClick={() => this.handleSetRating(value)}
          onMouseMove={() => this.props.onRatingMouseMove(value)}
          onMouseLeave={this.props.onRatingMouseLeave}>
        <polygon fill={ fillColorValue } points="9.6 13.672 14.544 16.625 13.232 11.06 17.6 7.315 11.848 6.832 9.6 1.583 7.352 6.832 1.6 7.315 5.968 11.06 4.656 16.625" transform="translate(-1.6 -1)"/>
      </svg>
    );
  }
}
 
export default IconStar;