import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Keyboard,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Alert from '../../components/Alert';
import Loader from '../../components/Loader';
import Textbox from '../../components/Textbox';
import Autocomplete from '../../components/Autocomplete';

import PokemonInfo from './components/PokemonInfo';
import PokemonMovements from './components/PokemonMovements';
import PokemonAbilities from './components/PokemonAbilities';
import PokemonSpecies from './components/PokemonSpecies';
import client from '../../api/';
import Row from '../../components/Row';

const Home = ({navigation}) => {
  const textboxRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedPokemonName, setSelectedPokemonName] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonData, setPokemonData] = useState({});
  const [query, setQuery] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const initData = async () => {
    const pokemonCount = await getPokemonCount();
    const allPokemons = await getAllPokemons(pokemonCount);
    setPokemonList(allPokemons.results);
  };

  const getPokemonCount = async () => {
    try {
      setLoading(true);
      const countData = await client.GET('/pokemon?count&limit=1');
      return countData.count;
    } catch (error) {
      setAlertText(error.message);
      setShowAlert(true);
      return -1;
    } finally {
      setLoading(false);
    }
  };

  const getAllPokemons = async (pokemonCount) => {
    try {
      const pokemonList = await client.GET(`/pokemon?limit= ${pokemonCount}`);
      return pokemonList;
    } catch (error) {
      setAlertText(error.message);
      setShowAlert(true);
      return [];
    }
  };

  const pokemonSelected = async (pokemon) => {
    console.log('pokemon: ', pokemon);
    setSelectedPokemonName(pokemon.name);
    setShowAutocomplete(false);
    setSelectedPokemon(pokemon);
    const pokemonId = pokemon.url.split('/')[6];
    try {
      setLoading(true);
      const pokemonDataRes = await client.GET(`/pokemon/${pokemonId}/`);
      setPokemonData(pokemonDataRes);
    } catch (error) {
      setAlertText(error.message);
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const clearText = () => {
    setQuery('');
    setShowAutocomplete(false);
    setSelectedPokemon({});
    setSelectedPokemonName('');
    setPokemonData({});
    textboxRef.current.clear();
    Keyboard.dismiss();
  };

  const textboxFocus = () => {
    setShowAutocomplete(true);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Alert
        message={alertText}
        setIsAlertVisible={setShowAlert}
        isAlertVisible={showAlert}
      />
      <Loader isLoaderVisible={loading} />
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Textbox
              onChange={(val) => setQuery(val)}
              forwardedRef={textboxRef}
              onFocus={textboxFocus}
              value={selectedPokemonName}
              setValue={setSelectedPokemonName}
              clearText={clearText}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Autocomplete
              showList={showAutocomplete}
              data={pokemonList}
              query={query}
              noResultText="No se encontraron Pokemones."
              selected={pokemonSelected}
            />
          </View>
        </View>
        {Object.keys(pokemonData).length > 0 && (
          <>
            <View style={[styles.sectionContainer, styles.verticalSpace]}>
              <PokemonInfo
                header={pokemonData.name}
                weight={pokemonData.weight}
                height={pokemonData.height}
                baseExperience={pokemonData.base_experience}
              />
            </View>
            <View style={styles.twoCards}>
              <View style={[styles.sectionContainer, styles.verticalSpace]}>
                <PokemonMovements movements={pokemonData.moves} />
              </View>
              <View style={[styles.sectionContainer, styles.verticalSpace]}>
                <PokemonAbilities abilities={pokemonData.abilities} />
              </View>
            </View>
            <View style={[styles.sectionContainer, styles.verticalSpace]}>
              <PokemonSpecies id={pokemonData.id} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    paddingHorizontal: 12,
  },
  verticalSpace: {
    marginTop: 15,
  },
  twoCards: {
    flexDirection: 'row',
  },
});

export default Home;
