import './Pokedex.css';
import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <section className='pokedex'>
        <h1 className='title'>Pokedex</h1>
        { pokemons.map(pokemon => (
          <Pokemon 
          pokemon={ pokemon }
          key={ pokemon.name }
          />
        )) }
      </section>
    )
  }
}

export default Pokedex;
