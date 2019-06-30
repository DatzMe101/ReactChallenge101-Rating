import React, { Component } from 'react';
import './initial.scss';

class Initial extends Component {
  getInitials = () => {
    const { value } = this.props;
    if (!value) return '';
    const initialsArray = value.split(' ');
    const firstInitial = initialsArray[0].charAt(0);
    const secondInitial = (initialsArray[1] && initialsArray[1].charAt(0)) || '';
    return `${firstInitial}${secondInitial}`;
  }

  render() {
    return (
    <div>
      <div className="initial">
        <span>{ this.getInitials()}</span>
      </div>
    </div>
    );
  }
}

export default Initial;