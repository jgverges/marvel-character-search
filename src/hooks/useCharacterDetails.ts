import { useQuery } from '@tanstack/react-query';
import { fetchCharacterDetails, fetchCharacterComics } from '../services/characterService';
import { Character, Comic } from '../types';

export const useCharacterDetails = (characterId: number) => {
  const characterQuery = useQuery<Character, Error>({
    queryKey: ['character', characterId],
    queryFn: () => fetchCharacterDetails(characterId),
  });

  const comicsQuery = useQuery<Comic[], Error>({
    queryKey: ['characterComics', characterId],
    queryFn: () => fetchCharacterComics(characterId),
  });

  return {
    character: characterQuery.data,
    comics: comicsQuery.data,
    isLoading: characterQuery.isLoading || comicsQuery.isLoading,
    error: characterQuery.error || comicsQuery.error,
  };
};
