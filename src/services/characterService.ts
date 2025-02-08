import { getCharacters, getCharacterDetails, getCharacterComics } from '../api/marvelApi';
import { Character, Comic, ApiResponse, Detail } from '../types';

export const fetchCharacters = async (searchTerm?: string): Promise<Character[]> => {
  const params = searchTerm ? { nameStartsWith: searchTerm } : {};
  const response = (await getCharacters(params)) as ApiResponse<Character>;
  return response.data.results;
};

export const fetchCharacterDetails = async (characterId: number): Promise<Detail> => {
  const response = (await getCharacterDetails(characterId)) as ApiResponse<Detail>;
  return response.data.results[0];
};

export const fetchCharacterComics = async (characterId: number): Promise<Comic[]> => {
  const response = (await getCharacterComics(characterId)) as ApiResponse<Comic>;
  return response.data.results;
};
