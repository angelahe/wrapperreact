import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({ name, size, ...props }) {
  return(
    <div>
      <Card 
        title="Animal" 
        details={ 
        <AnimalDetails
          {...props}
        />
        }
      >
        <em>Mammal</em>
        <h3>{name}</h3>
        <div>{size}kg</div>
      </Card>
    </div>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}