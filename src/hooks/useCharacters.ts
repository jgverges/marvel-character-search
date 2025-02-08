import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../services/characterService';
import { Character } from '../types';

export const useCharacters = (searchTerm?: string) => {
  const query = useQuery<Character[], Error>({
    queryKey: ['characters', searchTerm],
    queryFn: () => fetchCharacters(searchTerm),
  });

  return {
    characterList: query.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};
