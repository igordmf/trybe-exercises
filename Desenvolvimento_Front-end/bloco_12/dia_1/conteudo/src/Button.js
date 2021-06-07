import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      click: 0,
      color: 'black',
    };
  }

  handleClick() {
    const { click } = this.state;
    this.setState(previusState => ({
      click: previusState.click + 1,
      color: click % 2 === 0 ? 'green' : 'black',
    }));
  }

  render() {
    const { texto } = this.props;
    const { color, click } = this.state;
    return (
      <button type="button" style={{ color }} onClick={this.handleClick}>
        {texto}: {click} cliques!
      </button>
    );
  }
}

Button.propTypes = {
  texto: PropTypes.string,
};

export default Button;
