import './Pokemon.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <section className='pokemon'>
        <section className='pokemon-info'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Average weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
        </section>
        <img className='pokemon-img' src={ image } alt={ name } />
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
  }),
  image: PropTypes.string,
  }),
}

export default Pokemon;
