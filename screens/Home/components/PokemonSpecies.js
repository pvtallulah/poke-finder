import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import client from '../../../api';

import Alert from '../../../components/Alert';
import Row from '../../../components/Row';
import Card from '../../../components/Card';

const PokemonSpecies = ({id}) => {
  const [speciesData, setSpeciesData] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getSpeciesDetail = async () => {
    try {
      setIsLoading(true);
      const speciesRes = await client.GET(`/pokemon-species/${id}/`);
      setSpeciesData(speciesRes);
    } catch (error) {
      setAlertText(error.message);
      setShowAlert(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSpeciesDetail();
  }, []);
  return (
    <Card headerText="Datos de especie" containerStyle={styles.card}>
      <Alert
        message={alertText}
        setIsAlertVisible={setShowAlert}
        isAlertVisible={showAlert}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#536D79" />
      ) : (
        Object.keys(speciesData).length > 0 && (
          <>
            <Row>
              <Text style={styles.leftAlign}>
                Felicidad Base: {speciesData.base_happiness}
              </Text>
              <Text style={styles.leftAlign}>
                Ratio de captura: {speciesData.capture_rate}
              </Text>
              <Text style={styles.leftAlign}>
                Color: {speciesData.color.name}
              </Text>
            </Row>
            <Row>
              <Text style={styles.leftAlign}>
                Habitat: {speciesData.habitat.name}
              </Text>
              <Text style={styles.leftAlign}>
                Diferencia de generos:
                {speciesData.has_gender_differences ? 'Si' : 'No'}
              </Text>
              <Text style={styles.leftAlign}>
                {' '}
                Ratio de eclosion: {speciesData.hatch_counter}
              </Text>
            </Row>
            <Row>
              <Text style={styles.leftAlign}>
                Es bebe: {speciesData.is_baby ? 'Si' : 'No'}
              </Text>
              <Text style={styles.leftAlign}>
                Es legendario:
                {speciesData.is_legendary ? 'Si' : 'No'}
              </Text>
              <Text style={styles.leftAlign}>
                Es mitico: {speciesData.is_mythical ? 'Si' : 'No'}
              </Text>
            </Row>
          </>
        )
      )}
      {/* <ScrollView style={styles.scrollViewContainer}>
        {abilities.map((a) => (
          <Text key={a.ability.name} style={styles.ability}>
            {a.ability.name}
          </Text>
        ))}
      </ScrollView> */}
    </Card>
  );
};

PokemonSpecies.prototype = {
  id: PropTypes.string,
};

PokemonSpecies.defaultProps = {};

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: 150,
  },
  species: {
    fontSize: 15,
    textTransform: 'capitalize',
  },
  leftAlign: {
    textAlign: 'left',
    width: '33%',
  },
});
export default PokemonSpecies;
