import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../../components/Card';
import Row from '../../../components/Row';

const PokemonInfo = ({header, baseExperience, weight, height}) => {
  return (
    <Card headerText={header}>
      <Row>
        <Text>Exp base: {baseExperience}</Text>
        <Text>Peso: {weight}</Text>
        <Text>Alto: {height}</Text>
      </Row>
    </Card>
  );
};

PokemonInfo.prototype = {
  header: PropTypes.string,
  baseExperience: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
};

export default PokemonInfo;
