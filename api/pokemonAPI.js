import client from './index';

export async function getPokemonCount() {
  try {
    return await client.GET('/pokemon?count&limit=1');
  } catch (error) {
    throw error;
  }
}

export const getAllPokemons = async (pokemonCount) => {
  try {
    return await client.GET(`/pokemon?limit= ${pokemonCount}`);
  } catch (error) {
    throw error;
  }
};

export const getPokemonData = async (pokemonId) => {
  try {
    return await client.GET(`/pokemon/${pokemonId}/`);
  } catch (error) {
    throw error;
  }
};
