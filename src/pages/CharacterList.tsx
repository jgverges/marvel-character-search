import { useCharacters } from '../hooks/useCharacters';

function CharacterList() {
  const { characterList, error, isLoading } = useCharacters();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred</div>;

  return <pre>{JSON.stringify(characterList, null, 2)}</pre>;
}

export default CharacterList;
