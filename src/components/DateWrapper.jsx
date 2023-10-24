import React, { Component } from 'react';
import Date from './Date';

class DateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }

  toggleDateVisibility = () => {
    this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
  };

  render() {
    return (
      // Кнопка для показу або приховування компонента Date.
      <div>
        <button onClick={this.toggleDateVisibility}>
          {this.state.isHidden ? 'Показати дату' : 'Приховати дату'}
        </button>
        {!this.state.isHidden && <Date />}
      </div>
    );
  }
}

export default DateWrapper;
