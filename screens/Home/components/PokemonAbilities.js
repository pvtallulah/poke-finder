import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../../components/Card';

const PokemonAbilities = ({abilities}) => {
  return (
    <Card headerText="Habilidades" containerStyle={styles.card}>
      <ScrollView style={styles.scrollViewContainer}>
        {abilities.map((a) => (
          <Text key={a.ability.name} style={styles.ability}>
            {a.ability.name}
          </Text>
        ))}
      </ScrollView>
    </Card>
  );
};

PokemonAbilities.prototype = {
  abilities: PropTypes.array,
};

PokemonAbilities.defaultProps = {
  abilities: [],
};

const styles = StyleSheet.create({
  card: {
    minWidth: '48%',
  },
  scrollViewContainer: {
    height: 150,
  },
  ability: {
    fontSize: 15,
    textTransform: 'capitalize',
  },
});
export default PokemonAbilities;
