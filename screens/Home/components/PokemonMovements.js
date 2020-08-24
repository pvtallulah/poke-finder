import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../../components/Card';
import Row from '../../../components/Row';

const PokemonMovements = ({movements}) => {
  return (
    <Card headerText="Movimientos" containerStyle={styles.card}>
      <ScrollView style={styles.scrollViewContainer}>
        {movements.map((m) => (
          <Text key={m.move.name} style={styles.move}>
            {m.move.name}
          </Text>
        ))}
      </ScrollView>
      {/* <Row>
        <Text>Exp base: </Text>
        <Text>Peso: </Text>
        <Text>Alto: </Text>
      </Row> */}
    </Card>
  );
};

PokemonMovements.prototype = {
  movements: PropTypes.array,
};

PokemonMovements.defaultProps = {
  movements: [],
};

const styles = StyleSheet.create({
  card: {
    minWidth: '48%',
  },
  scrollViewContainer: {
    height: 150,
  },
  move: {
    fontSize: 15,
    textTransform: 'capitalize',
  },
});
export default PokemonMovements;
